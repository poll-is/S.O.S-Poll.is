import { newSpecPage } from '@stencil/core/testing';
import { AppDonor } from './app-donor';

describe('app-donor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDonor],
      html: `<app-donor></app-donor>`,
    });
    expect(page.root).toEqualHtml(`
      <app-donor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-donor>
    `);
  });
});
