export default `
    <label>
        {{{ Input type=type class="text-field__input" value=value placeholder=placeholder name=name }}}
        <span class="text-field__label">
            {{label}}
        </span>
        <p class="text-field__error">{{error}}</p>
    </label>
`;
