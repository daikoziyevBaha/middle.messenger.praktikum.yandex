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
                    <label class="user-data__label">Старый пароль</label>
                    <input type="password" name="oldPassword" class="user-data__value" placeholder="*******" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Новый пароль</label>
                    <input type="password" name="newPassword" class="user-data__value" placeholder="*******" />
                </fieldset>
                <fieldset class="user-data__element">
                    <label class="user-data__label">Повторите новый пароль</label>
                    <input type="password" name="confirmPassword" class="user-data__value" placeholder="*******" />
                </fieldset>
                <div class="profile__submit">
                   {{{submitButton}}}
                </div>
            </form>
        </div>
        {{{GoBackBlock}}}
    </div>
`
