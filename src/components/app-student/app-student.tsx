import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-student',
  styleUrl: 'app-student.css'
})
export class AppStudent {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Estudante</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
      <ion-item-divider>
        <ion-text>
          <h3>Cadastro de estudante:</h3>
          <p>Um texto explicativo aqui.</p>
        </ion-text>
      </ion-item-divider>

      <app-register></app-register>

      </ion-content>,
    ];
  }
}
