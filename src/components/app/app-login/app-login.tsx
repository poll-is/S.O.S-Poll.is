import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})
export class AppLogin {
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
          <ion-label position="stacked">E-mail:</ion-label>
          <ion-input
            type="email"
            name="email"
          ></ion-input>
        </ion-col>
        <ion-col size="12">
          <ion-label position="stacked">Senha:</ion-label>
          <ion-input
            type="password"
            name="password"
          ></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <ion-button href="#" color="primary" expand="block">Entrar</ion-button>
        </ion-col>
        <ion-col size="6">
          <ion-button href="#" color="medium" expand="block">Criar conta</ion-button>
        </ion-col>
        <ion-col size="12" class="ion-text-center"><small><a href="/passwordrecovery">Perdeu a sua senha?</a></small></ion-col>
      </ion-row>
      <hr/>
      <ion-row>
        <ion-col size="12" class="ion-text-center ion-text-uppercase">
          <p>Ou entre com a sua conta</p>
        </ion-col>
        <ion-col size="12">
          <ion-button href="#" color="primary" expand="block">Facebook</ion-button>
        </ion-col>
        <ion-col size="12">
          <ion-button href="#" color="bt-google" expand="block">Google</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    ];
  }
}
