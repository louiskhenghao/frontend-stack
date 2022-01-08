import { device, element, by, expect } from 'detox';

describe('mobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('WelcomeScreen'))).toBeVisible();
  });

  it('should go to next screen after tap', async () => {
    await element(by.id('next-screen-button')).tap();
    await expect(element(by.id('DemoScreen'))).toBeVisible();
  });
});
