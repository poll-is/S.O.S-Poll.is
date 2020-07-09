import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-donor',
  styleUrl: 'app-donor.css',
})
export class AppDonor {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Doador</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        
        <ion-item-divider>
          <ion-text>
            <h3>Cadastro do doador:</h3>
          </ion-text>
        </ion-item-divider>

        <ion-item>
          <ion-label position="floating">Primeiro nome:</ion-label>
          <ion-input type="text" pattern="text" name="first_name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Sobrenome:</ion-label>
          <ion-input type="text" pattern="text" name="last_name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Seu e-mail:</ion-label>
          <ion-input type="email" pattern="email" name="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Seu WhatsApp/Celular:</ion-label>
          <ion-input type="tel" pattern="tel" name="phone"></ion-input>
        </ion-item>

        <ion-item-divider>
          <ion-text>
            <h3>Cadastro do equipamento:</h3>
          </ion-text>
        </ion-item-divider>

        <ion-item>
          <ion-label>Tipo:</ion-label>
          <ion-select placeholder="Selecione o tipo de equipamento">
            <ion-select-option value="Desktop">Desktop</ion-select-option>
            <ion-select-option value="Notebook">Notebook</ion-select-option>
            <ion-select-option value="Tablet">Tablet</ion-select-option>
            <ion-select-option value="Smartphone">Smartphone</ion-select-option>
            <ion-select-option value="Monitor">Monitor</ion-select-option>
            <ion-select-option value="Acessório">Acessório</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Fabricante:</ion-label>
          <ion-input type="text" pattern="text" name="manufacturer"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Modelo:</ion-label>
          <ion-input type="text" pattern="text" name="model"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Número serial:</ion-label>
          <ion-input type="text" pattern="text" name="serial_number"></ion-input>
          <small>O número de série pode ser encontrado na parte traseira do equipamento, procure por "Serial Number" ou "S/N" ou, se você encontrar um código de barras com um número abaixo, use esse número. Se o equipamento não possuir o número de série, escreva nesse campo a palavra "Desconhecido".</small>
        </ion-item>

        <ion-item>
          <ion-label>Status:</ion-label>
          <ion-select placeholder="Status do equipamento">
            <ion-select-option value="S0">Marcado com um ID</ion-select-option>
            <ion-select-option value="S1">Doado, aguardando avaliação</ion-select-option>
            <ion-select-option value="S2">Equipamento qualificado para uso</ion-select-option>
            <ion-select-option value="S3">Atribuído a uma escola, aguardando para ser enviado</ion-select-option>
            <ion-select-option value="T1">Em trânsito, indo para uma escola</ion-select-option>
            <ion-select-option value="S4">Implantado e em uso por um aluno</ion-select-option>
            <ion-select-option value="S5">Implantado e em uso na escola</ion-select-option>
            <ion-select-option value="S6">Aguardando reparo ou reciclagem</ion-select-option>
            <ion-select-option value="T2">Em trânsito, indo para reparo ou reciclagem</ion-select-option>
            <ion-select-option value="S7">Reparado ou reciclado</ion-select-option>
            <ion-select-option value="S8">Implantado, mas não funciona</ion-select-option>
            <ion-select-option value="L1">Equipamento foi perdido</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item-divider>
          <ion-text>
            <h3>Localização:</h3>
          </ion-text>
        </ion-item-divider>

        <ion-item>
          <ion-label position="floating">CEP:</ion-label>
          <ion-input type="number" pattern="number" name="postal_code"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Logradouto:</ion-label>
          <ion-input type="text" pattern="text" name="place"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Número:</ion-label>
          <ion-input type="text" pattern="text" name="place_number"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Complemento:</ion-label>
          <ion-input type="text" pattern="text" name="additional"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Bairro:</ion-label>
          <ion-input type="text" pattern="text" name="neighborhood"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Cidade:</ion-label>
          <ion-input type="text" pattern="text" name="city"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Estado:</ion-label>
          <ion-select placeholder="Escolha o estado">
            <ion-select-option value="AC">AC</ion-select-option>
            <ion-select-option value="AL">AL</ion-select-option>
            <ion-select-option value="AP">AP</ion-select-option>
            <ion-select-option value="AM">AM</ion-select-option>
            <ion-select-option value="BA">BA</ion-select-option>
            <ion-select-option value="CE">CE</ion-select-option>
            <ion-select-option value="DF">DF</ion-select-option>
            <ion-select-option value="ES">ES</ion-select-option>
            <ion-select-option value="GO">GO</ion-select-option>
            <ion-select-option value="MA">MA</ion-select-option>
            <ion-select-option value="MT">MT</ion-select-option>
            <ion-select-option value="MS">MS</ion-select-option>
            <ion-select-option value="MG">MG</ion-select-option>
            <ion-select-option value="PA">PA</ion-select-option>
            <ion-select-option value="PB">PB</ion-select-option>
            <ion-select-option value="PR">PR</ion-select-option>
            <ion-select-option value="PE">PE</ion-select-option>
            <ion-select-option value="PI">PI</ion-select-option>
            <ion-select-option value="RJ">RJ</ion-select-option>
            <ion-select-option value="RN">RN</ion-select-option>
            <ion-select-option value="RS">RS</ion-select-option>
            <ion-select-option value="RO">RO</ion-select-option>
            <ion-select-option value="RR">RR</ion-select-option>
            <ion-select-option value="SC">SC</ion-select-option>
            <ion-select-option value="SP">SP</ion-select-option>
            <ion-select-option value="SE">SE</ion-select-option>
            <ion-select-option value="TO">TO</ion-select-option>
          </ion-select>
        </ion-item>

      </ion-content>
    ];
  }
}
