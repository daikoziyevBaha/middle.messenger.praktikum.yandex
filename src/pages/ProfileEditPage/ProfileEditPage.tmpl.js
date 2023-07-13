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
            <div class="user-data__list">
                <div class="user-data__element">
                    <p class="user-data__label">Почта</p>
                    <p class="user-data__value">pochta@yandex.ru</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Логин</p>
                    <p class="user-data__value">ivanivanov</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Имя</p>
                    <p class="user-data__value">Иван</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Фамилия</p>
                    <p class="user-data__value">Иванов</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Имя в чате</p>
                    <p class="user-data__value">Иван</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Телефон</p>
                    <p class="user-data__value">+7 (909) 967 30 30</p>
                </div>
            </div>
            <div class="profile__submit">
               {{{submitButton}}}
            </div>
        </div>
        {{{GoBackBlock}}}
    </div>
`