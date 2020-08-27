import { Component, State, h } from "@stencil/core";
import { sayHello } from "../../helpers/utils";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
})
export class AppProfile {
  @State() state = false;

  getData() {
    return JSON.parse(window.localStorage.getItem("user_data"));
  }

  formattedName(): string {
    let data = this.getData();
    if (data?.first_name) {
      console.log(data);
      return data.first_name + " " + data.last_name;
    }
    return "";
  }

  render() {
    if (!this.getData()?.first_name) {
      return "No data!";
    }
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Perfil: {this.formattedName()}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          {sayHello()}! {this.formattedName()}
        </p>

        <ion-item>
          <ion-label>Setting ({this.state.toString()})</ion-label>
          <ion-toggle
            checked={this.state}
            onIonChange={(ev) => (this.state = ev.detail.checked)}
          />
        </ion-item>
      </ion-content>,
    ];
  }
}
