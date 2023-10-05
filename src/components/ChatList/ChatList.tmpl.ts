export default `
    <div class="chat-list">
        {{#if loading}}
            <h1>Loading...</h1>
        {{else}}
            {{#each chats}}
                {{{ ChatItem id=this.id avatar=this.avatar title=this.title 
                unread_count=this.unread_count last_message=this.last_message }}}
            {{/each}}
        {{/if}}
    </div>
`;
