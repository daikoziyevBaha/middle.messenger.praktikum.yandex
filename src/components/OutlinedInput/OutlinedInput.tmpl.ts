export default `
    <label class="text-field">
        {{{ Input type=type class="text-field__input" value=value placeholder=placeholder name=name onBlur=onBlur }}}
        <span class="text-field__label">
            {{label}}
        </span>
        <p class="text-field__error">{{error}}</p>
    </label>
`;
