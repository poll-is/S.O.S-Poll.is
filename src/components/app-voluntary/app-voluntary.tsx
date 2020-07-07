import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-voluntary',
  styleUrl: 'app-voluntary.css',
  shadow: true,
})
export class AppVoluntary implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
