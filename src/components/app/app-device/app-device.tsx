import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-device',
  styleUrl: 'app-device.css',
  shadow: true,
})
export class AppDevice implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
