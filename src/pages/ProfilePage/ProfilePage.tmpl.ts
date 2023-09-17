export default `
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
        {{{editLink}}}
        {{{changePasswordLink}}}
        {{{logoutLink}}} 
    </div>
    {{{GoBackBlock}}}
    <div class="change-avatar-window" id="change-avatar-modal">
        {{{ChangeAvatarModal}}}
    </div>
`;
