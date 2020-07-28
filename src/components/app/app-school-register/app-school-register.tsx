import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-school-register',
  styleUrl: 'app-school-register.css'
})
export class AppSchoolRegister {

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-padding">
            <ion-item-divider class="ion-no-padding">
              <h4 class="ion-text-center">Cadastro de escola:</h4>
            </ion-item-divider>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Nome da escola: <ion-text color="danger">*</ion-text></ion-label>
                <ion-input
                  type="text"
                  name="school_name"
                  required
                  value=""
                  ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Código INEP: <ion-text color="danger">*</ion-text></ion-label>
                <ion-input
                  type="text"
                  name="inep_code"
                  required
                  value=""
                  ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Telefone: <ion-text color="danger">*</ion-text></ion-label>
                <ion-input
                  type="text"
                  name="school_phone"
                  required
                  value=""
                  ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">E-mail: <ion-text color="danger">*</ion-text></ion-label>
                <ion-input
                  type="text"
                  name="school_phone"
                  required
                  value=""
                  ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Número de estudantes: <ion-text color="danger">*</ion-text></ion-label>
                <ion-input
                  type="text"
                  name="school_phone"
                  required
                  value=""
                  ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button href="#" color="primary" expand="block">Adicionar escola</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid> 
    ];
  }

}
