export default `
    <div class="sidebar">
        <div class="sidebar__breadcrumb">
            <p class="sidebar__link-profile">
                Profile >
            </p>
        </div>
        <div class="sidebar__search-input">
            <input type="text" placeholder="Поиск"/>
        </div>
        {{{chatList}}}
    </div>
    <div class="content">
        Выберите чат чтобы отправить сообщение
    </div>
`;
