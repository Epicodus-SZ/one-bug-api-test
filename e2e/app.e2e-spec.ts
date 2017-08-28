import { OneBusPage } from './app.po';

describe('one-bus App', () => {
  let page: OneBusPage;

  beforeEach(() => {
    page = new OneBusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
