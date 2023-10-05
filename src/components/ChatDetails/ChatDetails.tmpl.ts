export default `
    <div class="chat-details">
        {{#if selectedChat}}
            <div class="chat-details__header">
                <div class="user-block">
                    <div class="user-block__avatar">
                        {{{avatar}}}
                    </div>
                    <div class="user-block__name">
                        {{username}}
                    </div>
                </div>
                {{{ ChatOptions }}}
            </div>
            <div class="chat-details__body">
                <div class="chat-container">
                    {{#each messages}}
                        <div class="{{#if this.isMine}}message-right{{else}}message-left{{/if}}">
                            <p class="text">
                                {{this.content}}
                                <span class="message-time">{{this.time}}</span>
                            </p>
                        </div>
                    {{/each}}
                </div>
            </div>
            <div class="chat-details__footer">
                {{{ SendMessageForm chatId=selectedChat }}}
            </div>
        {{else}}
            <div class="content">
                Выберите чат чтобы отправить сообщение
            </div>
        {{/if}}
    </div>
`;
