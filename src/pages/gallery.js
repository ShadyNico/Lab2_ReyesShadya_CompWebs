import { LitElement, html, css } from "lit";
class gallery extends LitElement {
    get elements(){
        return[
             {
                src:"https://w.wallhaven.cc/full/9o/wallhaven-9oo8k1.jpg",
                titulo:"Primera Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/ml/wallhaven-mlzoy1.png",
                titulo:"Segunda Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/k8/wallhaven-k881zd.jpg",
                titulo:"Tercera Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/k8/wallhaven-k81776.jpg",
                titulo:"Cuarta Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/qr/wallhaven-qr27rq.jpg",
                titulo:"Quinta Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/3q/wallhaven-3qqdg6.jpg",
                titulo:"Sexta Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/gw/wallhaven-gwwkql.jpg",
                titulo:"Septima Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/w5/wallhaven-w5eq57.jpg",
                titulo:"Octava Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/yq/wallhaven-yqqvv7.jpg",
                titulo:"Novena Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/21/wallhaven-219zgx.jpg",
                titulo:"Decima Imagen Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/l8/wallhaven-l8wlpl.jpg",
                titulo:"Imagen Once Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
            {
                src:"https://w.wallhaven.cc/full/3l/wallhaven-3lwmjv.jpg",
                titulo:"Imagen Doce Wallhaven",
                descripcion:"Sacado de Wallhaven.cc"
            },
        ]
    }

    static styles = css `
        .host{
            display: block;
            padding: 20px;
        } 

        .galeria{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px; 
        }
    `;

   render() {
        return html `
            <div class="host">
                <h1>Estamos en la seccion de galeria</h1>
                <div class="galeria">
                    ${this.elements.map(element => html `<lit-card 
                        .src="${element.src}" .titulo="${element.titulo}" 
                        .descripcion="${element.descripcion}"></lit-card>`)}
                </div>
            </div>
        `;
    }
}
customElements.define("lit-gallery", gallery);