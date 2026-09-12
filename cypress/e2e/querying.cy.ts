import { QueryingPage } from '../pages/QueryingPage';

describe('Element querying', () => {
  const queryingPage = new QueryingPage();

  beforeEach(() => {
    queryingPage.visit();
  });

  it('finds a control using its stable identifier', () => {
    queryingPage.verifyElementLookup();
  });

  it('finds meaningful content within a result list', () => {
    queryingPage.verifyContentLookup();
  });

  it('keeps form queries inside the intended component', () => {
    queryingPage.verifyScopedFormLookup();
  });
});
