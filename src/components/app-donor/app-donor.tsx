import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-donor',
  styleUrl: 'app-donor.css',
  shadow: true,
})
export class AppDonor implements ComponentInterface {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Doador</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
         Olá Fulano!
        </p>

        <ion-item>
          <ion-label>Seus equipamentos</ion-label>
        </ion-item>
      </ion-content>
    ];
  }
}
