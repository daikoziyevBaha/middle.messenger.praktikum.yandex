export default `
    <div class="profile-container">
        <div class="profile">
            <div class="profile__avatar">
                <img alt="profile avatar"/>
            </div>
            <p class="profile__name">Name{{name}}</p>
            <div class="user-data__list">
                <div class="user-data__element">
                    <p class="user-data__label">Pochta</p>
                    <p class="user-data__value">123</p>
                </div>
                <div class="user-data__element">
                    <p class="user-data__label">Pochta</p>
                    <p class="user-data__value">123</p>
                </div>
            </div>
            <div class="profile__change-data">
                <a href="#" class="link">Изменить данные</a>
            </div>
            <div class="profile__change-data">
                <a href="#" class="link">Изменить пароль</a>
            </div>
            <a href="/" class="link link_red">Выйти</a>
        </div>
        {{{GoBackBlock}}}
    </div>
`