export default `
    <form class="change-avatar-form">
        <h1 class="change-avatar-form__label">Загрузите файл</h1>
        <h1 class="change-avatar-form__label change-avatar-form__label-error">Ошибка, попробуйте ещё раз</h1>
        <fieldset class="change-avatar-form__field">
            {{{fileInput}}}
        </fieldset>
        <div class="change-avatar-form__actions">
            {{{submitButton}}}
        </div>
        <p class="change-avatar-form__required">Нужно выбрать файл</p>
    </form>
`