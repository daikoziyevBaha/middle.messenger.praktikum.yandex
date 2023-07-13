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
                    <p class="user-data__label">Старый пароль</p>
                    <p class="user-data__value">****</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Новый пароль</p>
                    <p class="user-data__value">*******</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Повторите новый пароль</p>
                    <p class="user-data__value">*******</p>
                </div>
            </div>
            <div class="profile__submit">
               {{{submitButton}}}
            </div>
        </div>
        {{{GoBackBlock}}}
    </div>
`