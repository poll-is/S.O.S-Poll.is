import { newE2EPage } from '@stencil/core/testing';

describe('app-donor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-donor></app-donor>');

    const element = await page.find('app-donor');
    expect(element).toHaveClass('hydrated');
  });
});
