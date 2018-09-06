const wd = require('wd');
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './sdjs-a63f397a7cfc30fc3f38759d0ad0179e-signed.apk' // path to apk relative to project root
};
const driver = wd.promiseChainRemote('localhost', PORT);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Check for valid elements', () => {
  beforeAll(async() => {
    await driver.init(config);
    await driver.sleep(15000); // may need to adjust sleep time to give appium time to run tests
  });
  afterAll(async() => await driver.quit());

  test('Check for valid email input', async done => {
    expect(await driver.hasElementByAccessibilityId('emailInput')).toBe(true);
    done();
  });

  test('Check for valid password input', async done => {
    expect(await driver.hasElementByAccessibilityId('passwordInput')).toBe(true);
    done();
  });

  test('Check for login button', async done => {
    expect(await driver.hasElementByAccessibilityId('loginButton')).toBe(true);
    done();
  });

  test('Check for invalid input', async done => {
    expect(await driver.hasElementByAccessibilityId('fakeAccessibilityId')).toBe(false);
    done();
  });

  test('Successfully logs in', async done => {
    await driver.elementByAccessibilityId('emailInput').type('test@test.com');
    await driver.elementByAccessibilityId('passwordInput').type('test');
    await driver.elementByAccessibilityId('loginButton').click();

    expect(await driver.hasElementByAccessibilityId('splashScreen')).toBe(true);
    done();
  });
});
