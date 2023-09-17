export default `
    {{#Main}}
        <div class="profile-container">
            <div class="profile">
                {{{ Avatar avatar=avatar }}}
                {{{ PasswordEditForm }}}
            </div>
            {{{ GoBack }}}
        </div>
    {{/Main}}
`;
