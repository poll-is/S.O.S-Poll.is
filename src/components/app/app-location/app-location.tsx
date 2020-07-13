import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-location',
  styleUrl: 'app-location.css',
  shadow: true,
})
export class AppLocation implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
