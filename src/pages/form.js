import { LitElement, html, css } from "lit";

class MiFormulario extends LitElement {
    static properties = {
        form: { type: Object },
        errors: { type: Object },
        submittedData: { type: Object },
        ready: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.form = {
            name: "",
            email: "",
            plan: "Earth-65",
            notifications: true,
        };
        this.errors = {};
        this.submittedData = null;
        this.ready = false;
    }

    static styles = css`
        :host {
            display: block;
            min-height: 100%;
            color: #ffffff;
            background:
                linear-gradient(135deg, rgba(0, 245, 255, 0.11), transparent 28%),
                linear-gradient(315deg, rgba(255, 43, 214, 0.12), transparent 32%),
                #0c0c0c;
            font-family: Arial, Helvetica, sans-serif;
        }

        .page {
            width: min(960px, calc(100% - 32px));
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

        h3 {
            font-size: 1.3rem;
        }

        .description {
            margin: 14px 0 28px;
            max-width: 680px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 1rem;
            line-height: 1.65;
        }

        .layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
        }

        .form-panel,
        .summary {
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background: #141414;
            box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36);
            padding: 24px;
        }

        form {
            display: grid;
            gap: 16px;
        }

        label {
            display: grid;
            gap: 7px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 0.92rem;
            font-weight: 700;
        }

        input,
        select {
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

        input:focus,
        select:focus {
            border-color: rgba(0, 245, 255, 0.7);
            box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.1);
        }

        .check-row {
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgba(255, 255, 255, 0.82);
            font-weight: 700;
        }

        .check-row input {
            width: 18px;
            min-height: 18px;
            accent-color: #00f5ff;
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
            color: #ff2bd6;
            transform: translateY(-2px);
        }

        .summary {
            display: grid;
            align-content: start;
            gap: 12px;
            border-left: 2px solid #ff2bd6;
        }

        .summary p {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.6;
        }

        strong {
            color: #ffc857;
        }

        @keyframes route-in {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (min-width: 820px) {
            .layout {
                grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr);
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
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.form = { ...this.form, [target.name]: value };

        if (this.errors[target.name]) {
            this.errors = { ...this.errors, [target.name]: "" };
        }
    }

    validateForm() {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!this.form.name.trim()) {
            errors.name = "Ingrese su nombre.";
        }

        if (!emailPattern.test(this.form.email.trim())) {
            errors.email = "Ingrese un correo valido.";
        }

        return errors;
    }

    handleSubmit(event) {
        event.preventDefault();
        const errors = this.validateForm();
        this.errors = errors;

        if (Object.keys(errors).length > 0) {
            this.submittedData = null;
            return;
        }

        this.submittedData = { ...this.form };
    }

    resetForm() {
        this.form = {
            name: "",
            email: "",
            plan: "Earth-65",
            notifications: true,
        };
        this.errors = {};
        this.submittedData = null;
    }

    renderSummary() {
        if (!this.submittedData) {
            return html`
                <article class="summary">
                    <h3>Vista previa</h3>
                    <p>Al enviar el formulario se mostrara una ficha reactiva con el estilo Gwen Stacy.</p>
                </article>
            `;
        }

        return html`
            <article class="summary">
                <h3>Registro recibido</h3>
                <p><strong>Nombre:</strong> ${this.submittedData.name}</p>
                <p><strong>Correo:</strong> ${this.submittedData.email}</p>
                <p><strong>Plan:</strong> ${this.submittedData.plan}</p>
                <p>
                    <strong>Notificaciones:</strong>
                    ${this.submittedData.notifications ? "Activadas" : "Desactivadas"}
                </p>
            </article>
        `;
    }

    render() {
        return html`
            <section class="page">
                <p class="eyebrow">Pagina extra requerida</p>
                <h2>Formulario Spider-Verse</h2>
                <p class="description">
                    Registro tematico para elegir una ruta visual inspirada en Gwen Stacy, Miles Morales y sus universos.
                </p>

                <div class="layout">
                    <article class="form-panel">
                        <form @submit=${this.handleSubmit} novalidate>
                            <label>
                                Nombre completo
                                <input
                                    name="name"
                                    autocomplete="name"
                                    .value=${this.form.name}
                                    @input=${this.handleInput}
                                />
                                ${this.errors.name ? html`<span class="error">${this.errors.name}</span>` : ""}
                            </label>

                            <label>
                                Correo electronico
                                <input
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    .value=${this.form.email}
                                    @input=${this.handleInput}
                                />
                                ${this.errors.email ? html`<span class="error">${this.errors.email}</span>` : ""}
                            </label>

                            <label>
                                Plan de interes
                                <select name="plan" .value=${this.form.plan} @input=${this.handleInput}>
                                    <option>Earth-65</option>
                                    <option>Brooklyn Visions</option>
                                    <option>Spider-Society</option>
                                </select>
                            </label>

                            <label class="check-row">
                                <input
                                    name="notifications"
                                    type="checkbox"
                                    .checked=${this.form.notifications}
                                    @input=${this.handleInput}
                                />
                                Recibir notificaciones
                            </label>

                            <div class="actions">
                                <button type="submit">Registrar</button>
                                <button class="secondary" type="button" @click=${this.resetForm}>Limpiar</button>
                            </div>
                        </form>
                    </article>

                    ${this.renderSummary()}
                </div>
            </section>
        `;
    }
}

if (!customElements.get("mi-formulario")) {
    customElements.define("mi-formulario", MiFormulario);
}
