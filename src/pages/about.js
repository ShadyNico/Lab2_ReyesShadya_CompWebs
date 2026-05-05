import { LitElement, html, css } from "lit";
class Miabout extends LitElement{
    static styles = css`
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                    color: #222;
                }

                .contenedor {
                    max-width: 800px;
                    margin: 30px auto;
                    padding: 20px;
                    background: #fff;
                }

                h2 {
                    text-align: center;
                    font-size: 28px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }

                h3 {
                    font-size: 20px;
                    margin-top: 30px;
                    margin-bottom: 10px;
                    font-weight: 600;
                    text-align: center;
                }

                p {
                    font-size: 15px;
                    color: #555;
                    line-height: 1.6;
                    text-align: center;
                    margin-bottom: 10px;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 15px 0;
                    text-align: center;
                }

                li {
                    margin-bottom: 8px;
                    font-size: 15px;
                    color: #444;
                }

                img {
                    width: 100%;
                    max-width: 350px;
                    height: auto;
                    display: block;
                    margin: 20px auto;
                    border-radius: 12px;
                }
    `;

    render(){
        return html`
            <section class="contenedor">
                <h2>Acerca de Nosotros</h2>
                <p>Esta sección presenta información básica sobre el equipo y los objetivos de la página.</p>

                <h3>Nuestro Equipo</h3>
                <p>Estos son algunos miembros del equipo:</p>
                <ul>
                    <li>Carlos Vargas</li>
                    <li>Maicol Vargas</li>
                    <li>Pepe Lopez</li>
                    <li>Juanito Chimborazo</li>
                </ul>

                <img src="https://psicologiamonzo.com/wp-content/uploads/2025/08/multiracial-grupo-joven-gente-toma-selfie_1139-1032.jpg" alt="Equipo de trabajo">

                <h3>Nuestros Objetivos</h3>
                <ul>
                    <li>Facilitar la búsqueda de imágenes.</li>
                    <li>Facilitar la descarga de imágenes.</li>
                    <li>Facilitar la visualización de imágenes.</li>
                </ul>
            </section>
        `;
    }
};
customElements.define("lit-about", Miabout);