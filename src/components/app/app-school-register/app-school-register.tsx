import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-school-register',
  styleUrl: 'app-school-register.css',
  shadow: true,
})
export class AppSchoolRegister implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
