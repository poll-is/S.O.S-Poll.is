import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-school',
  styleUrl: 'app-school.css'
})
export class AppSchool {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Escolas</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <app-app-school-list></app-app-school-list>
      </ion-content>,
    ];
  }
}
