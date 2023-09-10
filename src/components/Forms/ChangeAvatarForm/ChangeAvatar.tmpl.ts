export default `
    <form class="change-avatar-form">
        <p class="change-avatar-form__required">{{error}}</p>
    
        <h1 class="change-avatar-form__label">Загрузите файл</h1>
        {{#if requestError}}
            <h1 class="change-avatar-form__label change-avatar-form__label-error">Ошибка, попробуйте ещё раз</h1>
        {{/if}}
        <fieldset class="change-avatar-form__field">
            {{{ FileInput name="avatar" label="Выберите файл" }}}
        </fieldset>
        <div class="change-avatar-form__actions">
            {{{ Button type="submit" class="button" text="Сохранить изменения" }}}
        </div>
    </form>
`;
