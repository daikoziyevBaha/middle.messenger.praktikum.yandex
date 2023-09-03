export default `
    {{#Main}}
        <div class="navigation">
            <ul class="list-item">
            {{#each links}}
                <li class="list-item__element">
                    {{{ Link href=this.href class="link-navigation" text=this.text }}}
                </li>
            {{/each}}
            </ul>
        </div>
    {{/Main}}
`;
