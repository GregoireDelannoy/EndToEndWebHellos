import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('my-app app is running!');
  // });

  it('should display my name after submitting the form', () => {
    const NAME = 'ijdsfijfsodjbhu'
    page.navigateTo();
    element(by.id('name')).sendKeys(NAME)
    element(by.id('address')).sendKeys('1234 Street')
    element(by.css('button[type="submit"]')).click()
    expect(element(by.id('answer')).getText()).toContain(NAME)
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
