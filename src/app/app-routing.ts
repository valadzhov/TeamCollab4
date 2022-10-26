import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './dashboards/dashboards';
import './my-tasks/my-tasks';

export const routes: Route[] = [
  { path: 'dashboards', component: 'app-dashboards', name: 'Dashboards' },
  { path: '', component: 'app-my-tasks', name: 'My Tasks' },
  { path: 'my-tasks', component: 'app-my-tasks', name: 'My Tasks' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
