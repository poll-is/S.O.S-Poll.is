import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-school-list',
  styleUrl: 'app-school-list.css',
  shadow: true,
})
export class AppSchoolList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
