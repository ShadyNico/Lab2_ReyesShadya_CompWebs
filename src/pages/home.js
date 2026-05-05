import { LitElement, html, css } from "lit";
class home extends LitElement {
    static styles = css`
        host {
            display: block;
            padding: 20px;
        }
    `;

    render() {
        return html`
            <h1>Estamos en la seccion de home</h1>
        `;
    }
}
customElements.define("lit-home", home);