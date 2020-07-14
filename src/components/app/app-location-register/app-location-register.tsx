import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-location-register',
  styleUrl: 'app-location-register.css'
})
export class AppLocationRegister {
  @State() form_controls = {
    postal_code: null,
    place: null,
    place_number: null,
    additional: null,
    neighborhood: null,
    city: null,
    state: null,
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
              <h4 class="ion-text-center">Cadastro de endereço:</h4>
            </ion-item-divider>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">CEP:</ion-label>
              <ion-input
                type="number"
                name="postal_code"
                value={this.form_controls.postal_code}
                onInput={(ev: any) =>
                  this.changeFormValue("postal_code", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Logradouto:</ion-label>
              <ion-input
                type="text"
                name="place"
                value={this.form_controls.place}
                onInput={(ev: any) =>
                  this.changeFormValue("place", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Número:</ion-label>
              <ion-input
                type="text"
                name="place_number"
                value={this.form_controls.place_number}
                onInput={(ev: any) =>
                  this.changeFormValue("place_number", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Complemento:</ion-label>
              <ion-input
                type="text"
                name="additional"
                value={this.form_controls.additional}
                onInput={(ev: any) =>
                  this.changeFormValue("additional", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Bairro:</ion-label>
              <ion-input
                type="text"
                name="neighborhood"
                value={this.form_controls.neighborhood}
                onInput={(ev: any) =>
                  this.changeFormValue("neighborhood", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label position="floating">Cidade:</ion-label>
              <ion-input
                type="text"
                name="city"
                value={this.form_controls.city}
                onInput={(ev: any) =>
                  this.changeFormValue("city", ev.target.value)
                }
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label>Estado:</ion-label>
              <ion-select
                value={this.form_controls.state}
                onIonChange={(e) => {
                  this.changeFormValue("state", e.detail.value);
                }}
                placeholder="Escolha o estado"
              >
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
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="8" offset="2">
            <ion-button href="#" color="primary" expand="block">Adicionar endereço</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    ];
  }

}
