import { newSpecPage } from '@stencil/core/testing';
import { AppSchool } from './app-school';

describe('app-school', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSchool],
      html: `<app-school></app-school>`,
    });
    expect(page.root).toEqualHtml(`
      <app-school>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-school>
    `);
  });
});
