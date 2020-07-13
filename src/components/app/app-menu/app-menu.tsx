import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css'
})
export class AppMenu {

  render() {
    return [
      <ion-menu side="start" menuId="main-menu" contentId="main">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>Meu perfil</ion-item>
            <ion-item>Minhas escolas</ion-item>
            <ion-item>Meus equipamentos</ion-item>
            <ion-item>Minhas contribuições</ion-item>
            <ion-item>Configurações</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,
    ];
  }
}