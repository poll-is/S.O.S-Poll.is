import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-student',
  styleUrl: 'app-student.css',
  shadow: true,
})
export class AppStudent implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
