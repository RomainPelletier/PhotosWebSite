import { PhotosWebSitePage } from './app.po';

describe('photos-web-site App', () => {
  let page: PhotosWebSitePage;

  beforeEach(() => {
    page = new PhotosWebSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
