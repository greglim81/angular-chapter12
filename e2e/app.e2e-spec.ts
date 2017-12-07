import { FirestorePage } from './app.po';

describe('firestore App', () => {
  let page: FirestorePage;

  beforeEach(() => {
    page = new FirestorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
