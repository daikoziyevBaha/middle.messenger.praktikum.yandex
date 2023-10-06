export default function render(query, block) {
    const root = document.querySelector(query);

    // Можно завязаться на реализации вашего класса OldBlock
    root.appendChild(block.getContent());

    // block.dispatchComponentDidMount();

    return root;
}
