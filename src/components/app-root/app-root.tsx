import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/donor/" component="app-donor" />
          <ion-route url="/school/" component="app-school" />
          <ion-route url="/student/" component="app-student" />
          <ion-route url="/voluntary/" component="app-voluntary" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
