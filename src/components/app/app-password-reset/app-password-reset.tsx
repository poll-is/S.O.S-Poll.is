import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-password-reset',
  styleUrl: 'app-password-reset.css',
  shadow: true,
})
export class AppPasswordReset {

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="12">
          <ion-item>
              <ion-label position="floating">Seu e-mail: <ion-text color="danger">*</ion-text></ion-label>
              <ion-input
                type="email"
                name="email"
                required
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button href="#" color="primary" expand="block">Solicitar nova senha</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>,

      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Digite a sua nova senha:</ion-label>
              <ion-input type="password" name="new-password"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Repita a sua nova senha:</ion-label>
              <ion-input type="password" name="renew-password"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button href="#" color="primary" expand="block">Criar nova senha</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    ];
  }
}
