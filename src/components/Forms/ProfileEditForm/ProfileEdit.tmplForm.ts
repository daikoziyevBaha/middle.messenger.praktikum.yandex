export default `
    <form class="user-data__list">
        {{#each fields}}
            <fieldset class="user-data__element">
                {{{ StraightInput 
                    label=this.label 
                    value=this.value 
                    name=this.name 
                    error=this.error
                    onBlur=this.onBlur
                }}}
            </fieldset>
        {{/each}}
        <div class="profile__submit">
           {{{ Button type="submit" class="button" text="Сохранить" }}}
        </div>
    </form>
`;
