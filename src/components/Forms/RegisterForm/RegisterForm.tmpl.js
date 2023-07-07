export default `
    <form class="auth-form">
        <h1 class="auth-form__label">Регистрация</h1>
        {{#each fields}}
            <fieldset class="auth-form__field">
                {{{this}}}
            </fieldset>
        {{/each}}
        <div class="auth-form__actions">
            {{{registerButton}}}
        </div>
        {{{registerLink}}}
    </form>
`