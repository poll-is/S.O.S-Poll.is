import { Component, State, h } from "@stencil/core";
import { AuthService } from "../../../helpers/auth";

@Component({
  tag: "app-register",
  styleUrl: "app-register.css",
})
export class AppRegister {
  @State() password: string;
  @State() form_controls = {
    profile: null,
    first_name: null,
    last_name: null,
    school: null,
    enrollment: null,
    email: null,
    phone: null,
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log("A: ${JSON.stringify(this.form_controls)}");
  }

  changeFormValue(controlName, value) {
    this.form_controls = {
      ...this.form_controls,
      [controlName]: value,
    };
  }

  async registerUser(e) {
    e.preventDefault();
    if (this.form_controls.email != "" && this.password != "") {
      const user = await AuthService.registerUser(
        this.form_controls.email,
        this.password
      );
      await AuthService.sendVerificationEmail();
      console.log(user);
    }
  }

  async loginWithGoogle() {
    const user = await AuthService.loginWithGoogle();
    console.log(user);
  }

  async loginWithFacebook() {
    const user = await AuthService.loginWithFacebook();
    console.log(user);
  }

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-padding">
            <ion-item-divider class="ion-no-padding">
              <h4 class="ion-text-center">Criar conta</h4>
            </ion-item-divider>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label>Qual o seu perfil?</ion-label>
              <ion-select
                value={this.form_controls.profile}
                onIonChange={(e) => {
                  this.changeFormValue("profile", e.detail.value);
                }}
                placeholder="Selecione o perfil"
              >
                <ion-select-option value="Doador">Doador</ion-select-option>
                <ion-select-option value="Estudante">
                  Estudante
                </ion-select-option>
                <ion-select-option value="Voluntário">
                  Voluntário
                </ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Primeiro nome: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="text"
                name="first_name"
                required
                value={this.form_controls.first_name}
                onInput={(ev: any) =>
                  this.changeFormValue("first_name", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Sobrenome: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="text"
                name="last_name"
                required
                value={this.form_controls.last_name}
                onInput={(ev: any) =>
                  this.changeFormValue("last_name", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Sua escola: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="text"
                name="school"
                required
                value={this.form_controls.school}
                onInput={(ev: any) =>
                  this.changeFormValue("school", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Matrícula: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="text"
                name="school_enrollment"
                value={this.form_controls.enrollment}
                onInput={(ev: any) =>
                  this.changeFormValue("enrollment", ev.target.value)
                }
                required
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Seu WhatsApp/Celular: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="tel"
                name="phone"
                required
                value={this.form_controls.phone}
                onInput={(ev: any) =>
                  this.changeFormValue("phone", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                E-mail: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="email"
                name="email"
                value={this.form_controls.email}
                onInput={(ev: any) =>
                  this.changeFormValue("email", ev.target.value)
                }
                required
              ></ion-input>
            </ion-item>
          </ion-col>

          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">
                Senha: <ion-text color="danger">*</ion-text>
              </ion-label>
              <ion-input
                type="password"
                name="password"
                clearOnEdit={false}
                value={this.password}
                onChange={(ev: any) => (this.password = ev.target.value)}
                required
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button
              href="#"
              color="primary"
              onClick={this.registerUser.bind(this)}
              expand="block"
            >
              Criar conta
            </ion-button>
          </ion-col>
        </ion-row>
        <hr />
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-text-uppercase">
            <p>Ou entre com a sua conta</p>
          </ion-col>
          <ion-col size="12">
            <ion-button
              href="#"
              color="primary"
              onClick={() => this.loginWithFacebook()}
              expand="block"
            >
              Facebook
            </ion-button>
          </ion-col>
          <ion-col size="12">
            <ion-button
              href="#"
              color="bt-google"
              onClick={() => this.loginWithGoogle()}
              expand="block"
            >
              Google
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>,
    ];
  }
}
