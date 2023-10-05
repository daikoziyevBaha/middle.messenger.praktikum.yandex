export default `
    {{#Main}}
        <div class="profile-container">
            <div class="profile">
                {{{ Avatar avatar=avatar }}}
                <p class="profile__name">
                    {{#if display_name}}
                        {{display_name}}
                    {{else}}
                        Display Name
                    {{/if}}
                </p>
                <div class="user-data__list">
                    {{#each fields}}
                        <div class="user-data__element">
                            <p class="user-data__label">{{this.key}}</p>
                            <p class="user-data__value">{{this.value}}</p>
                        </div>
                    {{/each}}
                </div>
                {{{editLink}}}
                {{{ Link href="/profile-edit" class="profile__change-data" text="Изменить данные" }}}
                {{{ Link href="/password-edit" class="profile__change-data" text="Изменить пароль" }}}
                {{{ Link ref="logout" href="/sign-in" class="link link_red" text="Выйти" onClick=onClick }}} 
            </div>
            {{{ GoBack href="/messenger" }}}
            <div class="change-avatar-window" id="change-avatar-modal">
                {{{ChangeAvatarModal}}}
            </div>
        </div>
    {{/Main}}
`;
