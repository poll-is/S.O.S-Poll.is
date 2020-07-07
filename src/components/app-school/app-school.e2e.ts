import { newE2EPage } from '@stencil/core/testing';

describe('app-school', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-school></app-school>');

    const element = await page.find('app-school');
    expect(element).toHaveClass('hydrated');
  });
});
