import { LitElement, html, css } from "lit";

class MiHeader extends LitElement {
    static properties = {
        title: { type: String },
        navItems: { type: Array },
        activeRoute: { type: String, attribute: "active-route" },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.title = "Gwen Stacy Spider-Verse";
        this.activeRoute = window.location.pathname;
        this.ready = false;
        this.navItems = [
            { href: "/", label: "Inicio" },
            { href: "/gallery", label: "Galeria" },
            { href: "/direction", label: "Direccion" },
            { href: "/formulario", label: "Formulario" },
            { href: "/equipo", label: "Equipo" },
        ];
        this.updateActiveRoute = this.updateActiveRoute.bind(this);
    }

    static styles = css`
        :host {
            display: block;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
        }

        header {
            position: sticky;
            top: 0;
            z-index: 10;
            overflow: hidden;
            border-bottom: 1px solid rgba(0, 245, 255, 0.34);
            background:
                linear-gradient(90deg, rgba(255, 43, 214, 0.16), transparent 42%),
                linear-gradient(270deg, rgba(0, 245, 255, 0.14), transparent 44%),
                rgba(7, 7, 10, 0.96);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.34);
            backdrop-filter: blur(16px);
            opacity: 0;
            transform: translateY(-12px);
        }

        :host([ready]) header {
            animation: drop-in 420ms ease forwards;
        }

        .bar {
            width: min(1120px, calc(100% - 28px));
            min-height: 76px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            flex-wrap: wrap;
            padding: 12px 0;
        }

        h1 {
            margin: 0;
            color: #ffffff;
            font-size: 1.35rem;
            line-height: 1.08;
            text-shadow:
                2px 0 0 rgba(255, 43, 214, 0.72),
                -2px 0 0 rgba(0, 245, 255, 0.66);
        }

        nav {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        a {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 38px;
            padding: 0 12px;
            border: 1px solid transparent;
            border-radius: 8px;
            color: #ffffff;
            font-size: 0.92rem;
            font-weight: 700;
            letter-spacing: 0;
            text-decoration: none;
            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                color 180ms ease,
                transform 180ms ease;
        }

        a[aria-current="page"] {
            border-color: rgba(0, 245, 255, 0.62);
            color: #00f5ff;
            background: rgba(0, 245, 255, 0.08);
            box-shadow: 0 0 18px rgba(0, 245, 255, 0.18);
        }

        a::after {
            content: "";
            position: absolute;
            left: 12px;
            right: 12px;
            bottom: 6px;
            height: 2px;
            background: linear-gradient(90deg, #ff2bd6, #ffc857, #00f5ff);
            opacity: 0;
            transform: scaleX(0.4);
            transform-origin: center;
            transition:
                opacity 180ms ease,
                transform 180ms ease;
        }

        a[aria-current="page"]::after,
        a:hover::after {
            opacity: 1;
            transform: scaleX(1);
        }

        a:hover {
            border-color: rgba(255, 43, 214, 0.56);
            color: #00f5ff;
            box-shadow: 0 0 18px rgba(255, 43, 214, 0.24);
            transform: translateY(-2px);
        }

        @keyframes drop-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 720px) {
            h1 {
                font-size: 1.72rem;
            }
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("vaadin-router-location-changed", this.updateActiveRoute);
        window.addEventListener("popstate", this.updateActiveRoute);
    }

    disconnectedCallback() {
        window.removeEventListener("vaadin-router-location-changed", this.updateActiveRoute);
        window.removeEventListener("popstate", this.updateActiveRoute);
        super.disconnectedCallback();
    }

    firstUpdated() {
        this.ready = true;
    }

    updateActiveRoute(event) {
        this.activeRoute = event.detail?.location?.pathname ?? window.location.pathname;
    }

    render() {
        return html`
            <header>
                <div class="bar">
                    <h1>${this.title}</h1>
                    <nav aria-label="Navegacion principal">
                        ${this.navItems.map(
                            (item) => html`
                                <a href=${item.href} aria-current=${this.activeRoute === item.href ? "page" : "false"}>
                                    ${item.label}
                                </a>
                            `,
                        )}
                    </nav>
                </div>
            </header>
        `;
    }
}

if (!customElements.get("mi-header")) {
    customElements.define("mi-header", MiHeader);
}

if (!customElements.get("lit-header")) {
    customElements.define("lit-header", class LitHeader extends MiHeader {});
}
