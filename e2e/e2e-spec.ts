import { browser, by, element } from 'protractor';

describe('Movie Cruiser App', function() {

  beforeEach((done) => done());

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Movie Cruiser');
  });

  it('should be redirected to /home route on opening the application', () => {
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  it('should be able to search for movies', () => {
    browser.element(by.id('search-box')).sendKeys('Super');
    browser.element(by.id('search-button')).click();

    const searchItems = element.all(by.css('.movieTitle'));
    expect(searchItems.count()).toBe(20);
    for (let i = 0; i < 2; i += 1) {
      expect(searchItems.get(i).getText()).toContain('Super');
    }
  });

  it('should be able to add  to watchlist', () => {
    const searchItems = element.all(by.css('.movieItem'));
    expect(searchItems.count()).toBe(20);
    searchItems.get(0).click();
    browser.element(by.id('addBtn')).click();
  });
});
