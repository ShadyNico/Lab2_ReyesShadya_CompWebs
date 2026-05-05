import { LitElement, html, css } from "lit";

class Miquestions extends LitElement {
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
                    margin-bottom: 10px;
                    font-weight: 600;
                }

                .descripcion {
                    text-align: center;
                    font-size: 15px;
                    color: #666;
                    margin-bottom: 30px;
                }

                .pregunta {
                    margin-bottom: 20px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #e5e5e5;
                }

                .pregunta h4 {
                    margin: 0 0 8px 0;
                    font-size: 17px;
                    font-weight: 600;
                }

                .pregunta p {
                    margin: 0;
                    font-size: 15px;
                    color: #555;
                    line-height: 1.5;
                }
    `;

    render (){
        return html`
        <section class="contenedor">
                <h2>Preguntas Frecuentes</h2>
                <p class="descripcion">Aquí encontrarás respuestas claras sobre la página.</p>

                <div class="pregunta">
                    <h4>¿De qué se trata la página?</h4>
                    <p>Es un sitio web que ayuda a encontrar información sobre una galería de imágenes.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Cómo funciona la galería de imágenes?</h4>
                    <p>La galería muestra imágenes obtenidas desde Wallhaven para su visualización.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Qué es Wallhaven?</h4>
                    <p>Es una plataforma en la que se pueden encontrar imágenes de buena calidad.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Cómo puedo descargar las imágenes?</h4>
                    <p>Solo debes hacer clic en la imagen que deseas descargar.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Qué es un Shadow DOM?</h4>
                    <p>Es una característica que permite crear componentes encapsulados y reutilizables.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Qué es un Custom Element?</h4>
                    <p>Es un elemento personalizado que permite crear componentes propios en HTML.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Qué es un template?</h4>
                    <p>Es una estructura reutilizable que sirve como base para mostrar contenido.</p>
                </div>

                <div class="pregunta">
                    <h4>¿Qué es un slot?</h4>
                    <p>Es un espacio dentro de un componente donde se puede insertar contenido.</p>
                </div>
            </section>
        `;
    }
}

customElements.define("lit-questions", Miquestions);