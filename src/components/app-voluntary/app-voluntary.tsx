import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-voluntary',
  styleUrl: 'app-voluntary.css'
})
export class AppVoluntary {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Voluntário</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-item-divider>
          <ion-text>
            <h3>Cadastro de voluntário:</h3>
          </ion-text>
        </ion-item-divider>
        <ion-grid>
          <ion-row>
            <ion-col class="ion-padding">
              <p>Um texto explicativo aqui.</p>
            </ion-col>
          </ion-row>
        </ion-grid>
        
        <app-register></app-register>

      </ion-content>,
    ];
  }
}
