import NoAvatar from '../../static/images/no-avatar.png';
import { RESOURCES_URL } from "../../services/constants";

export default `
    <div>
        <div class="avatar">
            {{#if avatar}}
                <img src="${RESOURCES_URL}{{avatar}}" alt="profile avatar"/>
            {{else}}
                <img src="${NoAvatar}" alt="profile avatar"/>
            {{/if}}
            <div class="avatar__text">
                <p class="">Поменять аватар</p>
            </div>
        </div>
        {{#ModalWindow open=open onClose=onClose}}
            {{#Modal}}
                {{{ AvatarForm }}}
            {{/Modal}}
        {{/ModalWindow}}
    </div>
`;
