import { LitElement, html, css } from "lit";

class MiDirection extends LitElement {
    static properties = {
        title: { type: String },
        mapUrl: { type: String },
        store: { type: Object },
        contact: { type: Object },
        errors: { type: Object },
        statusMessage: { type: String },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.title = "Direccion Spider-Verse";
        this.mapUrl = "https://w.wallhaven.cc/full/kw/wallhaven-kwxveq.jpg";
        this.store = {
            name: "Portal Gwen x Miles",
            zone: "Earth-65 / Brooklyn Visions",
            schedule: "Lunes a viernes, 09:00 - 18:00",
            status: "Portal activo",
        };
        this.contact = {
            name: "",
            email: "",
            topic: "Consulta general",
            message: "",
        };
        this.errors = {};
        this.statusMessage = "";
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

        .heading {
            max-width: 720px;
            margin-bottom: 26px;
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
            font-size: 2.25rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        .lead {
            margin: 14px 0 0;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
            line-height: 1.65;
        }

        .content-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
            align-items: start;
        }

        .tech-panel,
        .contact-panel {
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background: #141414;
            box-shadow: 0 22px 52px rgba(0, 0, 0, 0.38);
        }

        .map-frame {
            position: relative;
            min-height: 300px;
            background: #0c0c0c;
            overflow: hidden;
        }

        .map-frame::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            background:
                linear-gradient(90deg, rgba(255, 43, 214, 0.16), transparent 35%),
                linear-gradient(270deg, rgba(0, 245, 255, 0.14), transparent 38%),
                repeating-linear-gradient(0deg, transparent 0 11px, rgba(255, 255, 255, 0.035) 12px);
            pointer-events: none;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 300px;
            object-fit: cover;
            filter: grayscale(62%) contrast(1.12) brightness(0.74);
            opacity: 0.9;
            transition:
                filter 240ms ease,
                opacity 240ms ease,
                transform 240ms ease;
        }

        .map-frame:hover img {
            filter: grayscale(28%) contrast(1.18) brightness(0.88);
            opacity: 0.98;
            transform: scale(1.03);
        }

        .store-info,
        .contact-body {
            display: grid;
            gap: 18px;
            padding: 24px;
        }

        .status {
            display: inline-flex;
            width: fit-content;
            align-items: center;
            min-height: 28px;
            padding: 0 10px;
            border: 1px solid rgba(255, 200, 87, 0.48);
            border-radius: 999px;
            color: #ffc857;
            background: rgba(255, 200, 87, 0.08);
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        dl {
            display: grid;
            gap: 14px;
            margin: 0;
        }

        .data-row {
            display: grid;
            gap: 4px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        dt {
            color: #00f5ff;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
        }

        dd {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.98rem;
            line-height: 1.55;
        }

        form {
            display: grid;
            gap: 14px;
        }

        label {
            display: grid;
            gap: 7px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 0.92rem;
            font-weight: 700;
        }

        input,
        select,
        textarea {
            width: 100%;
            min-height: 44px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 8px;
            outline: none;
            background: #09090c;
            color: #ffffff;
            padding: 0 12px;
            transition:
                border-color 160ms ease,
                box-shadow 160ms ease;
        }

        textarea {
            min-height: 116px;
            resize: vertical;
            padding-top: 12px;
            line-height: 1.5;
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: rgba(0, 245, 255, 0.7);
            box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.1);
        }

        .error {
            color: #ff6b6b;
            font-size: 0.82rem;
            line-height: 1.35;
        }

        .actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0 16px;
            border: 1px solid rgba(0, 245, 255, 0.48);
            border-radius: 8px;
            background: #0d1b1e;
            color: #ffffff;
            font-weight: 800;
            cursor: pointer;
            transition:
                border-color 180ms ease,
                color 180ms ease,
                transform 180ms ease;
        }

        button.secondary {
            border-color: rgba(255, 255, 255, 0.18);
            background: transparent;
            color: rgba(255, 255, 255, 0.82);
        }

        button:hover {
            border-color: #ffc857;
            color: #ffc857;
            transform: translateY(-2px);
        }

        .notice {
            margin: 0;
            border-left: 2px solid #00f5ff;
            background: rgba(0, 245, 255, 0.08);
            color: rgba(255, 255, 255, 0.82);
            padding: 12px;
            line-height: 1.55;
        }

        @keyframes route-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 900px) {
            .content-grid {
                grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
            }

            h2 {
                font-size: 3rem;
            }
        }
    `;

    firstUpdated() {
        this.ready = true;
    }

    handleInput(event) {
        const { name, value } = event.target;
        this.contact = { ...this.contact, [name]: value };

        if (this.errors[name]) {
            this.errors = { ...this.errors, [name]: "" };
        }
    }

    validateContact() {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!this.contact.name.trim()) {
            errors.name = "Ingrese su nombre.";
        }

        if (!emailPattern.test(this.contact.email.trim())) {
            errors.email = "Ingrese un correo valido.";
        }

        if (this.contact.message.trim().length < 10) {
            errors.message = "El mensaje debe tener al menos 10 caracteres.";
        }

        return errors;
    }

    handleSubmit(event) {
        event.preventDefault();
        const errors = this.validateContact();
        this.errors = errors;

        if (Object.keys(errors).length > 0) {
            this.statusMessage = "Revise los campos marcados antes de enviar.";
            return;
        }

        this.statusMessage = `Gracias, ${this.contact.name}. Tu mensaje de "${this.contact.topic}" fue registrado.`;
    }

    resetForm() {
        this.contact = {
            name: "",
            email: "",
            topic: "Consulta general",
            message: "",
        };
        this.errors = {};
        this.statusMessage = "";
    }

    render() {
        return html`
            <section class="page">
                <div class="heading">
                    <p class="eyebrow">Ubicacion y contacto</p>
                    <h2>${this.title}</h2>
                    <p class="lead">
                        Punto de encuentro inspirado en Gwen Stacy y Miles Morales, con formulario funcional desarrollado con Lit.
                    </p>
                </div>

                <div class="content-grid">
                    <article class="tech-panel">
                        <div class="map-frame">
                            <img src=${this.mapUrl} alt="Referencia visual del Spider-Verse" />
                        </div>

                        <div class="store-info">
                            <span class="status">${this.store.status}</span>
                            <h3>${this.store.name}</h3>
                            <dl>
                                <div class="data-row">
                                    <dt>Zona</dt>
                                    <dd>${this.store.zone}</dd>
                                </div>
                                <div class="data-row">
                                    <dt>Horario</dt>
                                    <dd>${this.store.schedule}</dd>
                                </div>
                                <div class="data-row">
                                    <dt>Ruta</dt>
                                    <dd>Ruta limpia para conectar Inicio, Galeria, Formularios y Equipo.</dd>
                                </div>
                            </dl>
                        </div>
                    </article>

                    <article class="contact-panel">
                        <div class="contact-body">
                            <h3>Formulario de contacto</h3>
                            <form @submit=${this.handleSubmit} novalidate>
                                <label>
                                    Nombre
                                    <input
                                        name="name"
                                        autocomplete="name"
                                        .value=${this.contact.name}
                                        @input=${this.handleInput}
                                    />
                                    ${this.errors.name ? html`<span class="error">${this.errors.name}</span>` : ""}
                                </label>

                                <label>
                                    Correo
                                    <input
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        .value=${this.contact.email}
                                        @input=${this.handleInput}
                                    />
                                    ${this.errors.email ? html`<span class="error">${this.errors.email}</span>` : ""}
                                </label>

                                <label>
                                    Motivo
                                    <select name="topic" .value=${this.contact.topic} @input=${this.handleInput}>
                                        <option>Consulta general</option>
                                        <option>Galeria Gwen Stacy</option>
                                        <option>Spider-Verse y Miles</option>
                                    </select>
                                </label>

                                <label>
                                    Mensaje
                                    <textarea
                                        name="message"
                                        .value=${this.contact.message}
                                        @input=${this.handleInput}
                                    ></textarea>
                                    ${this.errors.message ? html`<span class="error">${this.errors.message}</span>` : ""}
                                </label>

                                <div class="actions">
                                    <button type="submit">Enviar</button>
                                    <button class="secondary" type="button" @click=${this.resetForm}>Limpiar</button>
                                </div>
                            </form>

                            ${this.statusMessage ? html`<p class="notice">${this.statusMessage}</p>` : ""}
                        </div>
                    </article>
                </div>
            </section>
        `;
    }
}

if (!customElements.get("mi-direction")) {
    customElements.define("mi-direction", MiDirection);
}

if (!customElements.get("lit-direction")) {
    customElements.define("lit-direction", class LitDirection extends MiDirection {});
}
