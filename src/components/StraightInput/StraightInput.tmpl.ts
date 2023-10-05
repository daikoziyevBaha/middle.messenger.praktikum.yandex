export default `
    <label class="straight-label">
        <p class="straight-label__text">{{label}}</p>
        <div class="straight-label__input">
            <span class="straight-label__error">{{error}}</span>
            {{{ Input 
                name=name 
                class="straight-label__value" 
                value=value 
                placeholder=placeholder 
                type="text" 
                onBlur=onBlur }}}
        </div>
    </label>
`;
