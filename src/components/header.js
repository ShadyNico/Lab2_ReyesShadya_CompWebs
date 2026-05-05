import { LitElement, html, css } from "lit";

class Header extends LitElement {
    static styles = css`
        header {
                background-color: #000;
                color: white;
                padding: 15px;
                text-align: center;
            }
            a {
                color: white;
                margin: 0 10px;
                text-decoration: none;
                font-weight: bold;
            }
            nav a:hover {
                text-decoration: underline;
            }
    `;
    render(){
        return html`
            <header>
                <h1>Aplicacion De Galería</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/gallery">Galeria</a>
                    <a href="/direction">Direccion</a> 
                    <a href="/about">Acerca de Nosotros</a> 
                    <a href="/questions">Preguntas Frecuentes</a>  
                </nav>
            </header>
     `;
    }
}
customElements.define("lit-header", Header);