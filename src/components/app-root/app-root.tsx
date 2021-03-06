import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="page-home" />
          <ion-route url="/login/" component="app-login" />
          <ion-route url="/register/" component="app-register" />
          <ion-route url="/profile/" component="app-profile" />
          <ion-route url="/donor/" component="app-donor" />
          <ion-route url="/school/" component="app-school" />
          <ion-route url="/student/" component="app-student" />
          <ion-route url="/voluntary/" component="app-voluntary" />
          <ion-route url="/password-reset/" component="app-password-reset" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
