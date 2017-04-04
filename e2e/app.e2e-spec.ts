import { InsdustryCarouselPage } from './app.po';

describe('insdustry-carousel App', () => {
  let page: InsdustryCarouselPage;

  beforeEach(() => {
    page = new InsdustryCarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
