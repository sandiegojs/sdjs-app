const wd = require('wd');

const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './sdjs-ae8dd690b21b0fb8ca0e0aba621b7309-signed.apk' // path to apk relative to project root
};
const driver = wd.promiseChainRemote('localhost', PORT);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Check for valid elements', () => {
  beforeAll(async() => await driver.init(config).sleep(10000));
  afterAll(async() => await driver.quit());

  test('Check for valid email input', async() => {
    await driver.hasElementByAccessibilityId('emailInput', async(err, boolean) => {
      if (err) console.log(err);
      await expect(boolean).toBe(true);
    });
  });

  test('Check for valid password input', async() => {
    await driver.hasElementByAccessibilityId('passwordInput', async(err, boolean) => {
      if (err) console.log(err);
      await expect(boolean).toBe(true);
    });
  });

  test('Check for login button', async() => {
    await driver.hasElementByAccessibilityId('loginButton', async(err, boolean) => {
      if (err) console.log(err);
      await expect(boolean).toBe(true);
    });
  });

  test('Check for invalid input', async() => {
    await driver.hasElementByAccessibilityId('fakeAccessibilityId', async(err, boolean) => {
      if (err) console.log(err);
      await expect(boolean).toBe(false);
    });
  });
});
