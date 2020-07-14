import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-device-register',
  styleUrl: 'app-device-register.css'
})
export class AppDeviceRegister {

  @State() form_controls = {
    type: null,
    manufacturer: null,
    model: null,
    serial_number: null,
    status: null,
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('A: ${JSON.stringify(this.form_controls)}');
  }

  changeFormValue(controlName, value) {
    this.form_controls = {
      ...this.form_controls,
      [controlName]: value,
    };
  }

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-padding">
            <ion-item-divider class="ion-no-padding">
              <h4 class="ion-text-center">Cadastro do equipamento:</h4>
            </ion-item-divider>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label>Tipo:</ion-label>
              <ion-select
                value={this.form_controls.type}
                onIonChange={(e) => {
                  this.changeFormValue("type", e.detail.value);
                }}
                placeholder="Selecione o tipo de equipamento"
              >
                <ion-select-option value="Desktop">Desktop</ion-select-option>
                <ion-select-option value="Notebook">Notebook</ion-select-option>
                <ion-select-option value="Tablet">Tablet</ion-select-option>
                <ion-select-option value="Smartphone">
                  Smartphone
                </ion-select-option>
                <ion-select-option value="Monitor">Monitor</ion-select-option>
                <ion-select-option value="Acessório">Acessório</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Fabricante:</ion-label>
              <ion-input
                type="text"
                name="manufacturer"
                value={this.form_controls.manufacturer}
                onInput={(ev: any) =>
                  this.changeFormValue("manufacturer", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Modelo:</ion-label>
              <ion-input
                type="text"
                name="model"
                value={this.form_controls.model}
                onInput={(ev: any) =>
                  this.changeFormValue("model", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Número serial:</ion-label>
              <ion-input
                type="text"
                name="serial_number"
                value={this.form_controls.serial_number}
                onInput={(ev: any) =>
                  this.changeFormValue("serial_number", ev.target.value)
                }
              ></ion-input>
              <small>
                O número de série pode ser encontrado na parte traseira do
                equipamento, procure por "Serial Number" ou "S/N" ou, se você
                encontrar um código de barras com um número abaixo, use esse
                número. Se o equipamento não possuir o número de série, escreva
                nesse campo a palavra "Desconhecido".
              </small>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label>Status:</ion-label>
              <ion-select
                value={this.form_controls.status}
                onIonChange={(e) => {
                  this.changeFormValue("status", e.detail.value);
                }}
                placeholder="Status do equipamento"
              >
                <ion-select-option value="S0">
                  Marcado com um ID
                </ion-select-option>
                <ion-select-option value="S1">
                  Doado, aguardando avaliação
                </ion-select-option>
                <ion-select-option value="S2">
                  Equipamento qualificado para uso
                </ion-select-option>
                <ion-select-option value="S3">
                  Atribuído a uma escola, aguardando para ser enviado
                </ion-select-option>
                <ion-select-option value="T1">
                  Em trânsito, indo para uma escola
                </ion-select-option>
                <ion-select-option value="S4">
                  Implantado e em uso por um aluno
                </ion-select-option>
                <ion-select-option value="S5">
                  Implantado e em uso na escola
                </ion-select-option>
                <ion-select-option value="S6">
                  Aguardando reparo ou reciclagem
                </ion-select-option>
                <ion-select-option value="T2">
                  Em trânsito, indo para reparo ou reciclagem
                </ion-select-option>
                <ion-select-option value="S7">
                  Reparado ou reciclado
                </ion-select-option>
                <ion-select-option value="S8">
                  Implantado, mas não funciona
                </ion-select-option>
                <ion-select-option value="L1">
                  Equipamento foi perdido
                </ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button href="#" color="primary" expand="block">Adicionar dispositivo</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>      
    ];
  }

}
