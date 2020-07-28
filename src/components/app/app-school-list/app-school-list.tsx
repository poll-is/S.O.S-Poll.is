import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-school-list',
  styleUrl: 'app-school-list.css',
})
export class AppSchoolList {

  render() {
    return [
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>,

      <ion-content fullscreen>
        <ion-list>
          <ion-item>Escola Theophilo Sauer</ion-item>
          <ion-item>Escola Estadual Pedro Alcatara</ion-item>
          <ion-item>Colégio Buenos Aires</ion-item>
        </ion-list>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button color="danger">
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    ];
  }

}
