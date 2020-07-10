import { Component, State, h } from "@stencil/core";

@Component({
  tag: "app-donor",
  styleUrl: "app-donor.css",
})
export class AppDonor {
  @State() form_controls = {
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    type: null,
    manufacturer: null,
    model: null,
    serial_number: null,
    status: null,
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
    console.log(`A: ${JSON.stringify(this.form_controls)}`);
  }

  changeFormValue(controlName, value) {
    this.form_controls = {
      ...this.form_controls,
      [controlName]: value,
    };
  }

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

      <ion-content fullscreen>
        
        <ion-item-divider>
          <ion-text>
            <h3>Cadastro do doador:</h3>
          </ion-text>
        </ion-item-divider>
        
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-item>
              <ion-label position="floating">Primeiro nome:</ion-label>
              <ion-input
                type="text"
                name="first_name"
                value={this.form_controls.first_name}
                onInput={(ev: any) =>
                  this.changeFormValue("first_name", ev.target.value)
                }
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Sobrenome:</ion-label>
              <ion-input
                type="text"
                name="last_name"
                value={this.form_controls.last_name}
                onInput={(ev: any) =>
                  this.changeFormValue("last_name", ev.target.value)
                }
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Seu e-mail:</ion-label>
              <ion-input
                type="email"
                name="email"
                value={this.form_controls.email}
                onInput={(ev: any) =>
                  this.changeFormValue("email", ev.target.value)
                }
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Seu WhatsApp/Celular:</ion-label>
              <ion-input
                type="tel"
                name="phone"
                value={this.form_controls.phone}
                onInput={(ev: any) =>
                  this.changeFormValue("phone", ev.target.value)
                }
              ></ion-input>
            </ion-item>

            <ion-item-divider>
              <ion-text>
                <h3>Cadastro do equipamento:</h3>
              </ion-text>
            </ion-item-divider>

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

            <ion-item-divider>
              <ion-text>
                <h3>Localização:</h3>
              </ion-text>
            </ion-item-divider>

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
          </ion-list>
          <ion-button type="submit">Criar Perfil de Doador</ion-button>
        </form>
      </ion-content>,
      <ion-alert-controller></ion-alert-controller>,
    ];
  }
}
