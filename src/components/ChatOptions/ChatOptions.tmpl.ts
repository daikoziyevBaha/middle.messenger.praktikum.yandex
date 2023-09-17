export default `
    <button class="chat-options">
        {{#if open}}
            <div class="chat-options__window" id="chat-options-window">
                <div class="option" data-element="add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                    </svg>
                    <p class="option__text" data-element="add">Добавить пользователя</p>
                </div>
                <div class="option" data-element="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                    </svg>
                    <p class="option__text" data-element="delete">Удалить пользователя</p>
                </div>
            </div>
        {{/if}}
        {{#ModalWindow open=actionModal onClose=onCloseActionModal}}
            {{#Modal}}
                {{#if (eq action "add")}}
                    {{{ AddUserForm }}}
                {{else}}
                    {{{ DeleteUserForm }}}
                {{/if}}
            {{/Modal}}
        {{/ModalWindow}}
        <div class="chat-options__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">
              <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
              <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
              <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
            </svg>
        </div>
    </button>
`;
