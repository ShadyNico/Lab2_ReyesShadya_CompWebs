import { LitElement, html, css } from "lit";

class MiCard extends LitElement {
    static properties = {
        src: { type: String },
        titulo: { type: String },
        descripcion: { type: String },
        badge: { type: String },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.src =
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png/500px-Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png";
        this.titulo = "Gwen Stacy";
        this.descripcion = "Tarjeta reutilizable creada con Lit para la galeria Spider-Verse.";
        this.badge = "Earth-65";
        this.ready = false;
    }

    static styles = css`
        :host {
            display: block;
            color: #ffffff;
        }

        .card {
            position: relative;
            min-height: 100%;
            overflow: hidden;
            border: 1px solid rgba(0, 245, 255, 0.36);
            border-radius: 8px;
            background:
                linear-gradient(145deg, rgba(255, 43, 214, 0.14), transparent 38%),
                linear-gradient(315deg, rgba(0, 245, 255, 0.14), transparent 42%),
                #101014;
            box-shadow:
                0 18px 42px rgba(0, 0, 0, 0.42),
                0 0 20px rgba(0, 245, 255, 0.16);
            cursor: pointer;
            opacity: 0;
            transform: translateY(24px);
            transition:
                border-color 220ms ease,
                box-shadow 220ms ease,
                transform 220ms ease;
        }

        :host([ready]) .card {
            animation: card-in 560ms cubic-bezier(0.2, 0.82, 0.2, 1) forwards;
        }

        .card:hover {
            border-color: #ffc857;
            box-shadow:
                0 24px 58px rgba(0, 0, 0, 0.55),
                0 0 34px rgba(255, 200, 87, 0.24),
                0 0 34px rgba(0, 245, 255, 0.28);
            transform: translateY(-8px);
        }

        .image-frame {
            position: relative;
            aspect-ratio: 4 / 3;
            overflow: hidden;
            background: #050507;
        }

        .image-frame::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
                linear-gradient(135deg, rgba(255, 43, 214, 0.2), transparent 38%),
                linear-gradient(315deg, rgba(0, 245, 255, 0.18), transparent 42%);
            opacity: 0.72;
            mix-blend-mode: screen;
            pointer-events: none;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: saturate(1.08) contrast(1.04);
            transition:
                filter 260ms ease,
                transform 260ms ease;
        }

        .card:hover img {
            filter: saturate(1.28) contrast(1.12);
            transform: scale(1.06);
        }

        .content {
            position: relative;
            z-index: 1;
            padding: 18px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            min-height: 28px;
            padding: 0 10px;
            border: 1px solid rgba(0, 245, 255, 0.48);
            border-radius: 999px;
            color: #00f5ff;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
            background: rgba(0, 245, 255, 0.08);
        }

        h3 {
            margin: 14px 0 8px;
            color: #ffffff;
            font-size: 1.45rem;
            line-height: 1.08;
        }

        p {
            margin: 0;
            color: rgba(255, 255, 255, 0.76);
            font-size: 15px;
            line-height: 1.55;
        }

        @keyframes card-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    firstUpdated() {
        this.ready = true;
    }

    render() {
        return html`
            <article class="card">
                <div class="image-frame">
                    <img src=${this.src} alt=${this.titulo} loading="lazy" />
                </div>
                <div class="content">
                    <span class="badge">${this.badge}</span>
                    <h3>${this.titulo}</h3>
                    <p>${this.descripcion}</p>
                </div>
            </article>
        `;
    }
}

if (!customElements.get("mi-card")) {
    customElements.define("mi-card", MiCard);
}

if (!customElements.get("lit-card")) {
    customElements.define("lit-card", class LitCard extends MiCard {});
}
