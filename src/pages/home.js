import { LitElement, html, css } from "lit";

class MiHome extends LitElement {
    static properties = {
        title: { type: String },
        subtitle: { type: String },
        highlights: { type: Array },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.title = "Gwen Stacy en el Spider-Verse";
        this.subtitle =
            "Galeria inspirada en Gwen Stacy y Miles Morales, construida con Web Components, Lit y rutas limpias.";
        this.highlights = [
            "Estetica rosa, cian y blanco tomada del universo de Spider-Gwen.",
            "Tarjetas con imagenes de Gwen Stacy, Miles Morales y escenas del Spider-Verse.",
            "Formularios y vistas extra integrados sin perder el tema visual.",
        ];
        this.ready = false;
    }

    static styles = css`
        :host {
            display: block;
            min-height: 100%;
            color: #ffffff;
            background: #0c0c0c;
            font-family: Arial, Helvetica, sans-serif;
        }

        .home {
            width: min(1120px, calc(100% - 32px));
            min-height: calc(100vh - 156px);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
            align-items: center;
            padding: 54px 0;
            opacity: 0;
            transform: translateY(18px);
        }

        :host([ready]) .home {
            animation: page-in 520ms ease forwards;
        }

        .copy {
            max-width: 700px;
        }

        .tag {
            margin: 0 0 12px;
            color: #00f5ff;
            font-size: 0.85rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        h2 {
            margin: 0;
            color: #ffffff;
            font-size: 2.45rem;
            line-height: 1;
            text-shadow:
                1px 0 0 rgba(255, 43, 214, 0.7),
                -1px 0 0 rgba(0, 245, 255, 0.58);
        }

        .subtitle {
            margin: 18px 0 0;
            max-width: 640px;
            color: rgba(255, 255, 255, 0.74);
            font-size: 1rem;
            line-height: 1.7;
        }

        .actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 26px;
        }

        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0 18px;
            border: 1px solid rgba(0, 245, 255, 0.46);
            border-radius: 8px;
            color: #ffffff;
            background: #141414;
            box-shadow: 0 0 18px rgba(0, 245, 255, 0.12);
            font-weight: 800;
            letter-spacing: 0;
            text-decoration: none;
            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                color 180ms ease,
                transform 180ms ease;
        }

        a.secondary {
            border-color: rgba(255, 200, 87, 0.46);
            color: #ffc857;
        }

        a:hover {
            border-color: #ff2bd6;
            color: #00f5ff;
            box-shadow:
                0 0 20px rgba(255, 43, 214, 0.22),
                0 0 16px rgba(255, 200, 87, 0.12);
            transform: translateY(-2px);
        }

        .panel {
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background: #141414;
            box-shadow: 0 24px 54px rgba(0, 0, 0, 0.42);
        }

        .panel::before {
            content: "";
            position: absolute;
            inset: 0;
            border-top: 2px solid #ff2bd6;
            box-shadow: inset 0 1px 0 rgba(0, 245, 255, 0.22);
            pointer-events: none;
        }

        .panel-media {
            position: relative;
            aspect-ratio: 16 / 11;
            overflow: hidden;
            background: #0c0c0c;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(14%) contrast(1.05);
            transition:
                filter 220ms ease,
                transform 220ms ease;
        }

        .panel:hover img {
            filter: grayscale(0) contrast(1.12) saturate(1.18);
            transform: scale(1.04);
        }

        .panel-body {
            padding: 20px;
        }

        h3 {
            margin: 0 0 14px;
            color: #ffffff;
            font-size: 1.35rem;
            line-height: 1.1;
        }

        ul {
            display: grid;
            gap: 10px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        li {
            position: relative;
            padding-left: 18px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.96rem;
            line-height: 1.55;
        }

        li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.72em;
            width: 8px;
            height: 2px;
            background: #ffc857;
            box-shadow: 0 0 10px rgba(255, 200, 87, 0.36);
        }

        @keyframes page-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 840px) {
            .home {
                grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.78fr);
            }

            h2 {
                font-size: 3.35rem;
            }
        }
    `;

    firstUpdated() {
        this.ready = true;
    }

    render() {
        return html`
            <section class="home">
                <div class="copy">
                    <p class="tag">Earth-65 x Brooklyn</p>
                    <h2>${this.title}</h2>
                    <p class="subtitle">${this.subtitle}</p>
                    <div class="actions">
                        <a href="/gallery">Ver galeria</a>
                        <a class="secondary" href="/formulario">Ir al formulario</a>
                    </div>
                </div>

                <article class="panel" aria-label="Resumen de la aplicacion">
                    <div class="panel-media">
                        <img
                            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2025/05/spider-gwen-flanked-by-spider-man-and-her-new-costume.jpg?w=1200&h=675&fit=crop"
                            alt="Gwen Stacy en estilo Spider-Verse"
                        />
                    </div>
                    <div class="panel-body">
                        <h3>Identidad visual</h3>
                        <ul>
                            ${this.highlights.map((item) => html`<li>${item}</li>`)}
                        </ul>
                    </div>
                </article>
            </section>
        `;
    }
}

if (!customElements.get("mi-home")) {
    customElements.define("mi-home", MiHome);
}

if (!customElements.get("lit-home")) {
    customElements.define("lit-home", class LitHome extends MiHome {});
}
