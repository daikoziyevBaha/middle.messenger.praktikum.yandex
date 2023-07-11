export default `
    <div class="container">
        <div class="sidebar">
            <div class="sidebar__breadcrumb">
                <p class="sidebar__link-profile">
                    Profile >
                </p>
            </div>
            <div class="sidebar__search-input">
                <input type="text" placeholder="Поиск"/>
            </div>
            <div class="chat-list">
                {{{chatList}}}
            </div>
        </div>
        <div class="chat-content">
            {{{chatDetails}}}
        </div>
    </div>
`