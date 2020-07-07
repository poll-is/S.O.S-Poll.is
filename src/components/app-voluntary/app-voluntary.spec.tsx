import { newSpecPage } from '@stencil/core/testing';
import { AppVoluntary } from './app-voluntary';

describe('app-voluntary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppVoluntary],
      html: `<app-voluntary></app-voluntary>`,
    });
    expect(page.root).toEqualHtml(`
      <app-voluntary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-voluntary>
    `);
  });
});
