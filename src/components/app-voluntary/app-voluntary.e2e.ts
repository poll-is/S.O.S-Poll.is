import { newE2EPage } from '@stencil/core/testing';

describe('app-voluntary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-voluntary></app-voluntary>');

    const element = await page.find('app-voluntary');
    expect(element).toHaveClass('hydrated');
  });
});
