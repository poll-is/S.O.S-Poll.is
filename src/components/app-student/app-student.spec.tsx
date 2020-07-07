import { newSpecPage } from '@stencil/core/testing';
import { AppStudent } from './app-student';

describe('app-student', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppStudent],
      html: `<app-student></app-student>`,
    });
    expect(page.root).toEqualHtml(`
      <app-student>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-student>
    `);
  });
});
