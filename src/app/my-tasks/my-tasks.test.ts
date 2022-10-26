import { expect } from '@open-wc/testing';
import MyTasks from './my-tasks.js';

describe('MyTasks', () => {
  it('<app-my-tasks> is an instance of MyTasks', async () => {
    const element = document.createElement('app-my-tasks');
    expect(element).to.be.instanceOf(MyTasks);
  });
});
