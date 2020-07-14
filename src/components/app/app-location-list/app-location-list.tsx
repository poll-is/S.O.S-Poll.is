import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-location-list',
  styleUrl: 'app-location-list.css',
  shadow: true,
})
export class AppLocationList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
