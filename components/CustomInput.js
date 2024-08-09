class CustomInput extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        const content = document.getElementById('input-template').content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
}

customElements.define('custom-input', CustomInput)

