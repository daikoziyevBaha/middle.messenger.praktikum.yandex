import NoAvatar from '../../static/images/no-avatar.png';

export default `
        {{#if avatar}}
            <img src="{{avatar}}" alt="profile avatar"/>
        {{else}}
            <img src="${NoAvatar}" alt="profile avatar"/>
        {{/if}}
        <div class="avatar__text">
            <p class="">Поменять аватар</p>
        </div>
`;
