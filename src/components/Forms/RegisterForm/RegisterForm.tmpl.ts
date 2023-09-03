export default `
    <form class="auth-form">
        <h1 class="auth-form__label">Регистрация</h1>
        {{#each fields}}
            <fieldset class="auth-form__field">
                {{{ OutlinedInput 
                    name=this.name 
                    type=this.type 
                    value=this.value 
                    placeholder=" " 
                    error=this.error 
                    label=this.label 
                }}}
            </fieldset>
        {{/each}}
        <div class="auth-form__actions">
            {{{ Button class="button" type="submit" text="Зарегистрироваться" onClick=onSubmit }}}
        </div>
        {{{ Link href="/sign-in" class="link" text="У меня есть аккаунт" }}}
    </form>
`;
