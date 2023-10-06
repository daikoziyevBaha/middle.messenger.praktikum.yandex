import Route from "../Route/index.ts";
import Block from "../Block/index.ts";

export interface BlockConstructable<P extends Record<string, any> = any> {
    new(props: P): Block<P>;
}

class Router {
    private static __instance: Router;

    routes: Route[] = [];

    private _currentRoute: Route | null = null;

    history: History = window.history;

    private readonly _rootQuery: string = '';

    constructor(rootQuery: any) {
        if (Router.__instance) {
            // eslint-disable-next-line no-constructor-return
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: any) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = e => {
            this._onRoute((e.currentTarget as any)?.location?.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            this.go('/404');
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState("", "", pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }

    public reset() {
        // @ts-ignore
        delete Router.__instance;

        // eslint-disable-next-line no-new
        new Router(this._rootQuery);
    }
}

const router = new Router("#app");

export default router;
