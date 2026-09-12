import { ActionsPage } from '../pages/ActionsPage';

interface FormData {
  email: string;
  coupon: string;
  fruit: string;
  fruitValue: string;
}

describe('Form actions', () => {
  const actionsPage = new ActionsPage();
  let formData: FormData;

  before(() => {
    cy.fixture<FormData>('form-data').then((data) => {
      formData = data;
    });
  });

  beforeEach(() => {
    actionsPage.visit();
  });

  it('accepts common customer input', () => {
    actionsPage.enterEmail(formData.email);
    actionsPage.chooseAvailableOptions();
    actionsPage.selectFruit(formData.fruit, formData.fruitValue);
  });

  it('confirms a submitted coupon form', () => {
    actionsPage.submitCoupon(formData.coupon);
  });
});
