import { ngWPPage } from './app.po';

describe('ngWP App', () => {
  let page: ngWPPage;

  beforeEach(() => {
    page = new ngWPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
