export default `
    <form class="auth-form">
        <h1 class="auth-form__label">Вход</h1>
        {{#each fields}}
            <fieldset class="auth-form__field">
                {{{ OutlinedInput 
                    name=this.name 
                    type=this.type 
                    value=this.value 
                    placeholder=" "
                    error=this.error 
                    label=this.label
                    onBlur=this.onBlur
                }}}
            </fieldset>
        {{/each}}
        <div class="auth-form__actions">
            {{{ Button class="button" type="submit" text="Войти"}}}
        </div>
        {{{ Link href="/sign-up" class="link" text="Создать аккаунт" }}}
    </form>
`;
