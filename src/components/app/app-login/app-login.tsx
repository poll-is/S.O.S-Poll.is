import { Component, h } from "@stencil/core";
import { AuthService } from "../../../helpers/auth";

@Component({
  tag: "app-login",
  styleUrl: "app-login.css",
})
export class AppLogin {
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
              <ion-input type="email" name="email"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Senha:</ion-label>
              <ion-input type="password" name="password"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-button href="#" color="primary" expand="block">
              Entrar
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button href="/register" color="medium" expand="block">
              Criar conta
            </ion-button>
          </ion-col>
          <ion-col size="12" class="ion-text-center">
            <small>
              <a href="/passwordrecovery">Perdeu a sua senha?</a>
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
