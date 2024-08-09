class CustomTitle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<h1>Welcome, Web Component!</h1>`;
    }
}

customElements.define('custom-title', CustomTitle)