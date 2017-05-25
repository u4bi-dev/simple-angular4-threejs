import { AngularThreePage } from './app.po';

describe('angular-three App', () => {
  let page: AngularThreePage;

  beforeEach(() => {
    page = new AngularThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
