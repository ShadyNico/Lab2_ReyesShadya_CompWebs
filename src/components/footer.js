import { LitElement, html, css } from "lit";
class Footer extends LitElement{
    static styles = css`
       footer {
                    background-color: #000;
                    color: white;
                    text-align: center;
                    margin-top: 20px;
                    padding: 15px;
                }
    `;

    render(){
        return html`
             <footer>
                <p>Todos los derechos reservados - ESPE 2026 - Reyes Shadya.</p>
            </footer>
        `;
    }
}

customElements.define("lit-footer", Footer);