import { LitElement, html, css } from "lit";

class MiFooter extends LitElement {
    static properties = {
        credits: { type: String },
        year: { type: Number },
    };

    constructor() {
        super();
        this.year = 2026;
        this.credits = "ESPE - Programacion Integrativa de Componentes Web";
    }

    static styles = css`
        :host {
            display: block;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
        }

        footer {
            border-top: 1px solid rgba(255, 43, 214, 0.28);
            background:
                linear-gradient(90deg, rgba(0, 245, 255, 0.1), transparent 36%),
                linear-gradient(270deg, rgba(255, 200, 87, 0.1), transparent 40%),
                #07070a;
            padding: 18px 16px;
            text-align: center;
            box-shadow: 0 -14px 34px rgba(0, 0, 0, 0.28);
        }

        p {
            margin: 0;
            color: rgba(255, 255, 255, 0.78);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        strong {
            color: #00f5ff;
            font-weight: 800;
            text-shadow: 0 0 12px rgba(0, 245, 255, 0.45);
        }
    `;

    render() {
        return html`
            <footer>
                <p><strong>Gwen Stacy Spider-Verse</strong> - ${this.credits} - ${this.year}</p>
            </footer>
        `;
    }
}

if (!customElements.get("mi-footer")) {
    customElements.define("mi-footer", MiFooter);
}

if (!customElements.get("lit-footer")) {
    customElements.define("lit-footer", class LitFooter extends MiFooter {});
}
