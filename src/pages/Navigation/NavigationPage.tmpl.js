export default `
    <div class="navigation-container">
        <div class="content">
            <a href="/login" class="link-navigation"> '/login': LoginPage</a>
            <a href="/register" class="link-navigation">'/register': RegisterPage</a>
            <a href="/chats" class="link-navigation">'/chats': ChatListPage</a>
            <a href="/chats/1" class="link-navigation">'/chats/1': ChatOpenPage,</a>
            <a href="/profile" class="link-navigation">'/profile': ProfilePage</a>
            <a href="/profile/edit" class="link-navigation">'/profile/edit': ProfileEditPage</a>
            <a href="/profile/change-password" class="link-navigation">'/profile/change-password': PasswordEditPage</a>
            <a href="/404" class="link-navigation">'/404': NotFound</a>
            <a href="/500" class="link-navigation">'/500': ServerError</a>
        </div>
    </div>
`