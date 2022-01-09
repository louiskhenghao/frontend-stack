import { device, element, by, expect } from 'detox';

describe('mobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have example screen', async () => {
    await expect(element(by.id('ExampleScreen'))).toBeVisible();
  });
});
