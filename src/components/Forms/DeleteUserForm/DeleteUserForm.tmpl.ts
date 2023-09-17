export default `
    <form class="delete-user-form">
        <h1 class="delete-user-form__label">Удалить пользователя</h1>
        <fieldset class="delete-user-form__field">
            {{{ OutlinedInput 
                name="id"
                type="number"
                value=""
                placeholder=" "
                error=error
                label="Введите ID"
                onBlur=onTitleBlur
            }}}
        </fieldset>
        <div class="delete-user-form__actions">
            {{{ Button type="submit" class="button" text="Удалить" }}}
        </div>
    </form>
`;
