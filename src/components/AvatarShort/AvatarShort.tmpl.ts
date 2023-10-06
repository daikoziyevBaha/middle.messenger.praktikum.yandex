import { RESOURCES_URL } from "../../services/constants.js";

export default `
    <div class="avatar-block">
        {{#if avatar}}
            <img src="${RESOURCES_URL}{{avatar}}" alt="person avatar" />
        {{/if}}
    </div>
`;
