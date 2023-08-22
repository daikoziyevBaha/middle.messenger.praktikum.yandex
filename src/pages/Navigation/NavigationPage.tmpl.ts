export default `
<nav class="navigation">
    <ul class="list-item">
        {{{ Input class="input-test" ref="input" }}}
        <li class="list-item__element">
            <a href="/login" class="link-navigation"> '/login': LoginPage</a>
        </li>
        <li class="list-item__element">
            <a href="/register" class="link-navigation">'/register': RegisterPage</a>
        </li>
        <li class="list-item__element">
            <a href="/chats" class="link-navigation">'/chats': ChatListPage</a>
        </li>
        <li class="list-item__element">
            <a href="/chats/1" class="link-navigation">'/chats/1': ChatOpenPage,</a>
        </li>
        <li class="list-item__element">
            <a href="/profile" class="link-navigation">'/profile': ProfilePage</a>
        </li>
        <li class="list-item__element">
            <a href="/profile/edit" class="link-navigation">'/profile/edit': ProfileEditPage</a>
        </li>
        <li class="list-item__element">
            <a href="/profile/change-password" class="link-navigation">'/profile/change-password': PasswordEditPage</a>
        </li>
        <li class="list-item__element">
            <a href="/404" class="link-navigation">'/404': NotFound</a>
        </li>
        <li class="list-item__element">
            <a href="/500" class="link-navigation">'/500': ServerError</a>
        </li>
    </ul>
</nav>
`;
