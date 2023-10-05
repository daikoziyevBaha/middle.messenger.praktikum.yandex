export default `
    <button class="{{class}}" type={{type}}>
        <span class="{{#if text_class}}{{text_class}}{{else}}button__text{{/if}}">{{{text}}}</span>
    </button>
`;
