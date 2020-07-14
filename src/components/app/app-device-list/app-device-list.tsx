import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-device-list',
  styleUrl: 'app-device-list.css',
  shadow: true,
})
export class AppDeviceList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
