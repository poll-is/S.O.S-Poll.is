import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-school',
  styleUrl: 'app-school.css',
  shadow: true,
})
export class AppSchool implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
