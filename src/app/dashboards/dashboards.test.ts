import { expect } from '@open-wc/testing';
import Dashboards from './dashboards.js';

describe('Dashboards', () => {
  it('<app-dashboards> is an instance of Dashboards', async () => {
    const element = document.createElement('app-dashboards');
    expect(element).to.be.instanceOf(Dashboards);
  });
});
