const wd = require('wd');

const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './sdjs-044504846de8e0eff55ff128c9990d96-signed.apk' // path to apk relative to project root
};
const driver = wd.promiseChainRemote('localhost', PORT);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Check for valid elements', () => {
  beforeAll(async() => await driver.init(config).sleep(8000));
  afterAll(async() => await driver.quit());

  test('Check for valid email input', async(done) => {
    const bool = await driver.hasElementByAccessibilityId('emailInput', (err, boolean) => {
      if (err) console.log(err);
      expect(boolean).toBe(true);
    });
    expect(bool).toBe(true);
    done();
  });

  test('Check for valid password input', async(done) => {
    const bool = await driver.hasElementByAccessibilityId('passwordInput', (err, boolean) => {
      if (err) console.log(err);
      expect(boolean).toBe(true);
    });
    expect(bool).toBe(true);
    done();
  });

  test('Check for login button', async() => {
    await driver.hasElementByAccessibilityId('loginButton', (err, boolean) => {
      if (err) console.log(err);
      expect(boolean).toBe(true);
    });
  });

  test('Check for invalid input', async(done) => {
    const bool = await driver.hasElementByAccessibilityId('fakeAccessibilityId', (err, boolean) => {
      if (err) console.log(err);
      // expect(boolean).toBe(true);
    });
    expect(bool).toBe(false);
    done();
  });
});
