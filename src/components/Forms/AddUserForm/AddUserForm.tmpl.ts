export default `
    <form class="add-user-form">
        <h1 class="add-user-form__label">Добавить пользователя</h1>
        <fieldset class="add-user-form__field">
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
        <div class="add-user-form__actions">
            {{{ Button type="submit" class="button" text="Добавить" }}}
        </div>
    </form>
`;
