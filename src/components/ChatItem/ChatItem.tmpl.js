export default `
    <div class="chat">
        <div class="chat__avatar-block">
            {{{avatar}}}
<!--            <div class="avatar">-->
<!--            {{#if avatar}}-->
<!--                <img src="{{avatar}}" alt="person avatar" />-->
<!--            {{/if}}-->
<!--            </div>-->
        </div>
        <div class="chat__content">
            <div class="chat__title">
                <p class="chat__name">{{name}}</p>
                <p class="chat__date">{{lastMessageDate}}</p>
            </div>
            <div class="chat__body">
                <p class="chat__message">{{message}}</p>
                {{#if uncheckedMessagesCount includeZero=false}}
                    <div class="chat__unchecked-messages">
                        <div class="badge">
                            <p class="badge__value">{{uncheckedMessagesCount}}</p>
                        </div>
                    </div>
                {{/if}}
            </div>
        </div>
    </div>
`;
