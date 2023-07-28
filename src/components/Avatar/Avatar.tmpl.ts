import NoAvatar from '../../static/images/no-avatar.png';

export default `
<!--    <div class="avatar" onclick="window.profile.openChangeAvatarModal()">-->
        {{#if avatar}}
            <img src="{{avatar}}" alt="profile avatar"/>
        {{else}}
            <img src="${NoAvatar}" alt="profile avatar"/>
        {{/if}}
        <div class="avatar__text">
            <p class="">Поменять аватар</p>
        </div>
<!--    </div>-->

<!--    <div class="avatar">-->
<!--        {{#if avatar}}-->
<!--            <img src="{{avatar}}" alt="person avatar" />-->
<!--        {{/if}}-->
<!--    </div>-->
`;
