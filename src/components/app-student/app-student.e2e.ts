import { newE2EPage } from '@stencil/core/testing';

describe('app-student', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-student></app-student>');

    const element = await page.find('app-student');
    expect(element).toHaveClass('hydrated');
  });
});
