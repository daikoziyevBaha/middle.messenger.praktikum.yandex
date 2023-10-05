export default `
    {{#Main}}
        <div class="container">
            <div class="sidebar">
                <div class="sidebar__breadcrumb">
                    <p class="sidebar__link-profile">
                        {{{ Link href="/settings" class="link" text="Profile >"}}}
                    </p>
                </div>
                {{{ Button class="button  create-chat-btn" type="button" text="Создать чат" onClick=onOpenCreateChat }}}
                {{#ModalWindow open=isOpenCreateChat onClose=onCloseCreateChat}}
                    {{#Modal}}
                        <form class="form" id="create-chat">
                            <h2 class="form__title">Новый чат</h2>
                            {{{ OutlinedInput 
                                name="title"
                                type="text"
                                value=chatTitle
                                placeholder=" "
                                error=this.error 
                                label="Введите название чата"
                                onBlur=onTitleBlur
                            }}}
                            {{{ Button type="submit" class="button" text="Создать" onClick=onSubmitNewChat }}}
                        </form>
                    {{/Modal}}
                {{/ModalWindow}}
                <div class="sidebar__search-input">
                    <input type="text" placeholder="Поиск"/>
                </div>
                {{{ ChatList ref="chatList" loading=loading }}}
            </div>
            <div class="chat-content">
                {{{ ChatDetails }}}
            </div>
        </div>
    {{/Main}}
`;
