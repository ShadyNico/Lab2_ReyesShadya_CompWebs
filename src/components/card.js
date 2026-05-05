import { LitElement, html, css } from "lit";

class Card extends LitElement{
    static properties = {
        //tipos de dato que puedo ocupar: String, Boolean, Number, Array, Object 
        src: {type : String},
        titulo: {type : String},
        descripcion: {type : String},
    }
    
    static styles = css`
       .card{
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            cursor: pointer;
        }
                
        .card:hover{
                    transform: translateY(-8px) scale(1);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
                }
                
        .card img{
                    width: 100%;
                    height: 180px;
                  object-fit: cover;

                    display: block;
                }

           .card div{
                    padding: 15px;
                }
    `;

    render(){
        return html`
        <div class="card">
                    <img src=${this.src}>
                    <div>
                        <h3>${this.titulo}</h3>
                        <p>${this.descripcion}</p>
                    </div>
            </div>
        `;
    }
}

customElements.define('lit-card', Card);