import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css'
})
export class PageHome {

  render() {
    return [
      // insert header
      <app-header></app-header>,
      
      // insert menu
      <app-menu></app-menu>,

      // insert content
      <ion-content id="main">
        <ion-item-divider>
          <ion-text>
            <h3>Bem-vindo!</h3>
            <p>Clique no perfil que melhor te representa:</p>
          </ion-text>
        </ion-item-divider>

        <ion-card href="/donor">
          <ion-card-header>
            <ion-card-subtitle>Perfil</ion-card-subtitle>
            <ion-card-title>Doador</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Você quer doar o seu equipamento? Acesse aqui, para dar o primeiro passo importante para ajudar a levar a educação a uma escola carente e eliminar o lixo eletrônico.
          </ion-card-content>
        </ion-card>

        <ion-card href="/student">
          <ion-card-header>
            <ion-card-subtitle>Perfil</ion-card-subtitle>
            <ion-card-title>Estudante</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Você está precisando de um computador ou celular para estudar? Acesse aqui, faça o seu cadastro para que a sua escola possa realizar o pedido na plataforma.
          </ion-card-content>
        </ion-card>

        <ion-card href="/voluntary">
          <ion-card-header>
            <ion-card-subtitle>Perfil</ion-card-subtitle>
            <ion-card-title>Voluntário</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Você quer ajudar na coleta, higienização, limpeza dos dados dos computadores doados, organizar conteúdos educacionais, tecnologias de reciclagem ou realizar atividades de divulgação e cadastrar escolas para gerenciar os equipamentos? Aqui é o seu local.
          </ion-card-content>
        </ion-card>
        
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item-divider>
                <ion-text>
                  <h3>Escolas</h3>
                  <p>Acesse aqui, para encontrar informações sobre as escolas aptas para receber os equipamentos. Caso não encontre a sua escola, saiba como criar e gerenciar uma a partir da plataforma.</p>
                </ion-text>
              </ion-item-divider>
            </ion-col>
          </ion-row>
          <ion-row class="ion-align-items-center">
            <ion-col size="8" offset="2">
              <ion-button href="/school" color="primary" expand="block">Escolas cadastradas</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}