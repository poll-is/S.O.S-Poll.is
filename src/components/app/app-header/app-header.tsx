import { Component, h } from '@stencil/core';
import { menuController } from '@ionic/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css'
})
export class AppHeader {

  openMainMenu() {
    menuController.enable(true, 'main-menu');
    menuController.open('main-menu');
  }

  render() {
    return [
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start" onClick={() => this.openMainMenu()}>
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>S.O.S. Poll.is</ion-title>
          </ion-toolbar>
        </ion-header>
    ];
  }
}
