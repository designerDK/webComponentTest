class CustomInput extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        
        const template = document.getElementById('input-template')
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
}

customElements.define('custom-input', CustomInput)

