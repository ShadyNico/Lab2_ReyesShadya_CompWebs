import { LitElement, html, css } from "lit";

class GaleriaImagenes extends LitElement {
    static properties = {
        headline: { type: String },
        intro: { type: String },
        images: { type: Array },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.headline = "Galeria Gwen Stacy";
        this.intro = "Tarjetas reactivas con imagenes y referencias visuales de Gwen Stacy, Miles Morales y el Spider-Verse.";
        this.ready = false;
        this.images = [
            {
                src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png/500px-Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png",
                titulo: "Spider-Woman",
                descripcion: "Gwen Stacy con su traje blanco, rosa y cian de Across the Spider-Verse.",
                badge: "Gwen",
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Gwen_Stacy_%28Into_the_Spider-Verse%29.jpg/500px-Gwen_Stacy_%28Into_the_Spider-Verse%29.jpg",
                titulo: "Gwen Stacy",
                descripcion: "Version civil de Gwen con el estilo grafico del Spider-Verse.",
                badge: "Earth-65",
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Spider-Man_%28Miles_Morales%29_character_art.png/500px-Spider-Man_%28Miles_Morales%29_character_art.png",
                titulo: "Miles Morales",
                descripcion: "El vinculo de Gwen con Miles mantiene la paleta urbana y neon.",
                badge: "Brooklyn",
            },
            {
                src: "https://media.thepopverse.com/media/spider-gwen-6-ql1naf4lcwhelftbxrbffz1l4e.jpg",
                titulo: "Gwen en accion",
                descripcion: "Composicion dinamica para reforzar movimiento y energia de comic.",
                badge: "Accion",
            },
            {
                src: "https://s2982.pcdn.co/wp-content/uploads/2019/11/gwen-stacy-as-spider-gwen-feature.jpg.optimal.jpg",
                titulo: "Ritmo de Gwen",
                descripcion: "La bateria y la identidad musical de Gwen dentro del concepto visual.",
                badge: "Drums",
            },
            {
                src: "https://w.wallhaven.cc/full/x6/wallhaven-x6jo5o.jpg",
                titulo: "Portal Spider-Verse",
                descripcion: "Imagen con energia dimensional para cerrar el grid de tarjetas.",
                badge: "Portal",
            },
        ];
    }

    static styles = css`
        :host {
            display: block;
            min-height: 100%;
            color: #ffffff;
            background:
                linear-gradient(135deg, rgba(255, 43, 214, 0.14), transparent 30%),
                linear-gradient(315deg, rgba(0, 245, 255, 0.12), transparent 32%),
                #07070a;
            font-family: Arial, Helvetica, sans-serif;
        }

        .shell {
            width: min(1120px, calc(100% - 32px));
            margin: 0 auto;
            padding: 42px 0 56px;
            opacity: 0;
            transform: translateY(18px);
        }

        :host([ready]) .shell {
            animation: page-in 560ms cubic-bezier(0.2, 0.82, 0.2, 1) forwards;
        }

        .heading {
            max-width: 760px;
            margin-bottom: 30px;
        }

        .eyebrow {
            margin: 0 0 10px;
            color: #00f5ff;
            font-size: 0.85rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        h1 {
            margin: 0;
            color: #ffffff;
            font-size: 2.4rem;
            line-height: 1;
            text-shadow:
                2px 0 0 rgba(255, 43, 214, 0.7),
                -2px 0 0 rgba(0, 245, 255, 0.65);
        }

        .intro {
            max-width: 640px;
            margin: 18px 0 0;
            color: rgba(255, 255, 255, 0.78);
            font-size: 1rem;
            line-height: 1.7;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 18px;
        }

        @keyframes page-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 820px) {
            h1 {
                font-size: 3.2rem;
            }
        }
    `;

    firstUpdated() {
        this.ready = true;
    }

    render() {
        return html`
            <section class="shell" aria-label="Galeria de imagenes">
                <div class="heading">
                    <p class="eyebrow">Spider-Gwen con Lit</p>
                    <h1>${this.headline}</h1>
                    <p class="intro">${this.intro}</p>
                </div>

                <div class="gallery-grid">
                    ${this.images.map(
                        (image) => html`
                            <mi-card
                                .src=${image.src}
                                .titulo=${image.titulo}
                                .descripcion=${image.descripcion}
                                .badge=${image.badge}
                            ></mi-card>
                        `,
                    )}
                </div>
            </section>
        `;
    }
}

if (!customElements.get("galeria-imagenes")) {
    customElements.define("galeria-imagenes", GaleriaImagenes);
}

if (!customElements.get("lit-gallery")) {
    customElements.define("lit-gallery", class LitGallery extends GaleriaImagenes {});
}
