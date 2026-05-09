import { LitElement, html, css } from "lit";

class MiEquipo extends LitElement {
    static properties = {
        members: { type: Array },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.members = [
            {
                name: "Gwen Stacy",
                role: "Spider-Woman",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png/500px-Gwen_Stacy_%28Spider-Woman%29_from_Across_the_Spider-Verse.png",
                description: "Centro visual del proyecto: traje blanco, acentos rosa/cian y energia Earth-65.",
            },
            {
                name: "Miles Morales",
                role: "Spider-Man",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Spider-Man_%28Miles_Morales%29_character_art.png/500px-Spider-Man_%28Miles_Morales%29_character_art.png",
                description: "Aporta contraste urbano, ritmo de Brooklyn y conexion narrativa con Gwen.",
            },
            {
                name: "Earth-65",
                role: "Universo de Gwen",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Gwen_Stacy_%28Into_the_Spider-Verse%29.jpg/500px-Gwen_Stacy_%28Into_the_Spider-Verse%29.jpg",
                description: "Referencia la identidad de Gwen fuera del traje y su lenguaje grafico propio.",
            },
            {
                name: "Portal Multiversal",
                role: "Conexion visual",
                image: "https://w.wallhaven.cc/full/x6/wallhaven-x6jo5o.jpg",
                description: "Une las rutas de la app con luces neon, movimiento y atmosfera Spider-Verse.",
            },
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

        .page {
            width: min(1120px, calc(100% - 32px));
            margin: 0 auto;
            padding: 48px 0 58px;
            opacity: 0;
            transform: translateY(16px);
        }

        :host([ready]) .page {
            animation: route-in 460ms ease forwards;
        }

        .eyebrow {
            margin: 0 0 10px;
            color: #00f5ff;
            font-size: 0.84rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        h2,
        h3 {
            margin: 0;
            color: #ffffff;
            line-height: 1.08;
        }

        h2 {
            font-size: 2.35rem;
        }

        .description {
            margin: 14px 0 30px;
            max-width: 680px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 1rem;
            line-height: 1.65;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 18px;
        }

        article {
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background:
                linear-gradient(145deg, rgba(255, 43, 214, 0.12), transparent 38%),
                linear-gradient(315deg, rgba(0, 245, 255, 0.1), transparent 42%),
                #141414;
            box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36);
            transition:
                border-color 180ms ease,
                transform 180ms ease,
                box-shadow 180ms ease;
        }

        article:hover {
            border-color: rgba(255, 200, 87, 0.64);
            transform: translateY(-6px);
            box-shadow:
                0 26px 60px rgba(0, 0, 0, 0.48),
                0 0 28px rgba(255, 200, 87, 0.16);
        }

        .media {
            aspect-ratio: 1;
            overflow: hidden;
            background: #09090c;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(28%) contrast(1.06);
            transition:
                filter 200ms ease,
                transform 200ms ease;
        }

        article:hover img {
            filter: grayscale(0) contrast(1.12) saturate(1.14);
            transform: scale(1.05);
        }

        .body {
            padding: 18px;
        }

        .role {
            display: inline-flex;
            align-items: center;
            min-height: 28px;
            margin-bottom: 12px;
            padding: 0 10px;
            border: 1px solid rgba(0, 245, 255, 0.48);
            border-radius: 999px;
            color: #00f5ff;
            background: rgba(0, 245, 255, 0.08);
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        h3 {
            font-size: 1.35rem;
        }

        p {
            margin: 10px 0 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.96rem;
            line-height: 1.58;
        }

        @keyframes route-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 820px) {
            h2 {
                font-size: 3rem;
            }
        }
    `;

    firstUpdated() {
        this.ready = true;
    }

    render() {
        return html`
            <section class="page">
                <p class="eyebrow">Pagina extra requerida</p>
                <h2>Equipo Spider-Verse</h2>
                <p class="description">
                    Informacion renderizada con Lit: Gwen Stacy, Miles Morales y referencias visuales del multiverso.
                </p>

                <div class="team-grid">
                    ${this.members.map(
                        (member) => html`
                            <article>
                                <div class="media">
                                    <img src=${member.image} alt="Foto de ${member.name}" loading="lazy" />
                                </div>
                                <div class="body">
                                    <span class="role">${member.role}</span>
                                    <h3>${member.name}</h3>
                                    <p>${member.description}</p>
                                </div>
                            </article>
                        `,
                    )}
                </div>
            </section>
        `;
    }
}

if (!customElements.get("mi-equipo")) {
    customElements.define("mi-equipo", MiEquipo);
}
