export default `
    <div class="chat {{#if (eq id selectedChat)}}chat__selected{{/if}}">
        <div class="chat__avatar-block">
            {{{ AvatarShort avatar=avatar }}}
        </div>
        <div class="chat__content">
            <div class="chat__title">
                <p class="chat__name">{{title}}</p>
                <p class="chat__date">{{lastMessageDate}}</p>
            </div>
            <div class="chat__body">
                {{#if last_message}}
                    <p class="chat__message">{{last_message.content}}</p>
                {{else}}
                    <p class="chat__message">Zero messages in this chat!</p>
                {{/if}}
                {{#if unread_count includeZero=false}}
                    <div class="chat__unchecked-messages">
                        <div class="badge">
                            <p class="badge__value">{{unread_count}}</p>
                        </div>
                    </div>
                {{/if}}
            </div>
        </div>
    </div>
`;
