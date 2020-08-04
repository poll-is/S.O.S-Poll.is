import { Component, State, h } from "@stencil/core";
import { AuthService } from "../../../helpers/auth";

@Component({
  tag: "app-login",
  styleUrl: "app-login.css",
})
export class AppLogin {
  @State() email: string;
  @State() password: string;

  async loginWithEmail(e) {
    e.preventDefault();
    if (this.email != "" && this.password != "") {
      const user = await AuthService.loginWithEmail(this.email, this.password);
      console.log(user);
    }
  }

  async registerUser(e) {
    e.preventDefault();
    if (this.email != "" && this.password != "") {
      const user = await AuthService.registerUser(this.email, this.password);
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
            <ion-item-divider class="ion-no-padding ion-text-center">
              <h1>Poll.is</h1>
            </ion-item-divider>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">E-mail:</ion-label>
              <ion-input
                type="email"
                name="email"
                value={this.email}
                onChange={(ev: any) => (this.email = ev.target.value)}
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Senha:</ion-label>
              <ion-input
                type="password"
                name="password"
                clearOnEdit={false}
                value={this.password}
                onChange={(ev: any) => (this.password = ev.target.value)}
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-button
              href="#"
              color="primary"
              expand="block"
              onClick={this.loginWithEmail.bind(this)}
            >
              Entrar
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button
              href="/register"
              color="medium"
              expand="block"
              onClick={this.registerUser.bind(this)}
            >
              Criar conta
            </ion-button>
          </ion-col>
          <ion-col size="12" class="ion-text-center">
            <small>
              <a href="/password-reset/">Perdeu a sua senha?</a>
            </small>
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
              onClick={() => this.loginWithFacebook()}
              color="primary"
              expand="block"
            >
              Facebook
            </ion-button>
          </ion-col>
          <ion-col size="12">
            <ion-button
              href="#"
              onClick={() => this.loginWithGoogle()}
              color="bt-google"
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
