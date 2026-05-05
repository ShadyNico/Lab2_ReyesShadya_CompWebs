import { LitElement, html, css } from "lit";
class direction extends LitElement {
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
            
            img{
                border-radius: 16px;
                box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            img{
                max-width: 100%;
                height: auto;
            }

    `;

    render() {
        return html`
            <section class="contenedor">
                <h2>Bienvenido a Dirección, aqui encontraras la ubicacion de la tienda</h2>
                <img src = "https://img.gta5-mods.com/q75/images/convenience-store-locations/cb393e-store2.png"
                alt="Ubicacion de la tienda"></section>
        `;
    }
}
customElements.define("lit-direction", direction);