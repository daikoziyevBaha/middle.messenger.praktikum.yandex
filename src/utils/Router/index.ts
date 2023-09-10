import Route from "../Route";

class Router {
    private static __instance: Router;

    routes: Route[] = [];

    private _currentRoute: Route | null;

    history: History;

    private readonly _rootQuery: string;

    constructor(rootQuery) {
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

    use(pathname, block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = e => {
            this._onRoute(e.currentTarget.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname) {
        this.history.pushState("", "", pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}

const router = new Router("#app");

export default router;
