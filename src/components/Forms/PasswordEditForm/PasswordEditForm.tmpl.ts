export default `
    {{#each fields}}
        <fieldset class="user-data__element">
            {{{this}}}
        </fieldset>
    {{/each}}
    <div class="profile__submit">
       {{{submitButton}}}
    </div>
`;
