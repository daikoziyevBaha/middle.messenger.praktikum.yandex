export default `
    {{#Main}}
        <div class="profile-container">
            <div class="profile">
                {{{ Avatar avatar=avatar }}}
                {{{ ProfileEditForm }}}
            </div>
            {{{ GoBack }}}
        </div>
    {{/Main}}
`;
