import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>S.O.S Poll.is</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Bem-vindo! <br/>
          Clique no perfil que melhor te representa:
        </p>
        
        <ion-button color="secondary" href="/donor" expand="block">Doador</ion-button>
        <p>Você quer doar o seu equipamento? Acesse aqui, para dar o primeiro passo importante para ajudar a levar a educação a uma escola carente e eliminar o lixo eletrônico.</p>

        <ion-button color="secondary" href="/profile/school" expand="block">Escola</ion-button>
        <p>Você quer ver as escolas cadastradas ou cadastrar a sua escola? Acesse aqui, para encontrará informações sobre as escolas em que os computadores e celulares são implantados e como criar e gerenciar uma escola a partir da plataforma.</p>

        <ion-button color="secondary" href="/profile/student" expand="block">Estudante</ion-button>
        <p>Você está precisando de um computador ou celular para estudar? Acesse aqui, faça o seu cadastro para que a sua escola possa realizar o pedido na plataforma.</p>

        <ion-button color="secondary" href="/profile/voluntary" expand="block">Voluntário</ion-button>
        <p>Você quer ajudar na coleta, higienização, limpeza dos dados do computadores doados, organizar conteúdos educacionais, tecnologias de reciclagem ou realizar atividades de divulgação, entre outras? Aqui é o seu local.</p>
      
      </ion-content>
    ];
  }
}
