import { LitElement, html, css } from "lit";
class home extends LitElement {
    static styles = css`
        :host {
                    display: block;
                    font-family: Arial, sans-serif;
                }

                .contenedor {
                    padding: 40px 20px;
                    text-align: center;
                    background: #ffffff;
                }

                h2 {
                    margin: 0 0 10px 0;
                    font-size: 28px;
                    font-weight: 600;
                    color: #222;
                }

                p {
                    margin: 0;
                    font-size: 15px;
                    color: #666;
                }

                img {
                    max-width: 100%;
                    height: auto;
                }
    `;

    render() {
        return html`
            <section class="contenedor">
                <h2>Bienvenido a Home</h2>
                <p>Un espacio simple, limpio y fácil de entender.</p>
                <img src = "https://israelescuer.com/wp-content/uploads/web-components-1024x595.jpg">
            </section>
        `;
    }
}
customElements.define("lit-home", home);