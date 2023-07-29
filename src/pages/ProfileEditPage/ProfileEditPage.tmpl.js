import NoAvatar from '../../static/images/no-avatar.png';
export default `
    <div class="profile-container">
        <div class="profile">
            <div class="profile__avatar">
                {{#if avatar}}
                    <img src="{{avatar}}" alt="profile avatar"/>
                {{else}}
                    <img src="${NoAvatar}" alt="profile avatar"/>
                {{/if}}
            </div>
            <form class="user-data__list">
                <fieldset class="user-data__element">
                    <label class="user-data__label">Почта</label>
                    <input name="email" class="user-data__value" placeholder="pochta@yandex.ru" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Логин</label>
                    <input name="login" class="user-data__value" placeholder="ivanivanov" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Имя</label>
                    <input name="first_name" class="user-data__value" placeholder="Иван" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Фамилия</label>
                    <input name="second_name" class="user-data__value" placeholder="Иванов" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Имя в чате</label>
                    <input name="display_name" class="user-data__value" placeholder="Иван" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Телефон</label>
                    <input name="phone" class="user-data__value" placeholder="+7 (909) 967 30 30" />
                </fieldset>
                <div class="profile__submit">
                   {{{submitButton}}}
                </div>
            </form>
        </div>
        {{{GoBackBlock}}}
    </div>
`
