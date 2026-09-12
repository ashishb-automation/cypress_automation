import { TraversalPage } from '../pages/TraversalPage';

describe('Component traversal', () => {
  const traversalPage = new TraversalPage();

  beforeEach(() => {
    traversalPage.visit();
  });

  it('identifies the active breadcrumb and navigation item', () => {
    traversalPage.verifyActiveBreadcrumb();
    traversalPage.verifyActiveNavigationItem();
  });

  it('selects an item by position within a known list', () => {
    traversalPage.verifyExpectedListPosition();
  });

  it('finds the tabs next to the active selection', () => {
    traversalPage.verifySiblingTabs();
  });
});
