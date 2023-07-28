export default `
<!--    <div class="profile-container">-->
        <div class="profile">
            {{{avatarBlock}}}
            <p class="profile__name">{{name}}</p>
            <div class="user-data__list">
                <div class="user-data__element">
                    <p class="user-data__label">Имя</p>
                    <p class="user-data__value">Евгений</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Почта</p>
                    <p class="user-data__value">евгений@gmail.kz</p>
                </div>
            </div>
<!--            <div class="profile__change-data">-->
                {{{editLink}}}
<!--                <a href="#" class="link">Изменить данные</a>-->
<!--            </div>-->
<!--            <div class="profile__change-data">-->
                {{{changePasswordLink}}}
<!--                <a href="#" class="link">Изменить пароль</a>-->
<!--            </div>-->
            {{{logoutLink}}} 
<!--            <a href="/" class="link link_red">Выйти</a>-->
        </div>
        {{{GoBackBlock}}}
        <div class="change-avatar-window" id="change-avatar-modal">
            {{{ChangeAvatarModal}}}
        </div>
<!--    </div>-->
`;
