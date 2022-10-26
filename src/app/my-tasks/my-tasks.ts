import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcCalendarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcBadgeComponent, IgcListComponent, IgcListItemComponent, IgcIconComponent, IgcButtonComponent, IgcRippleComponent, IgcAvatarComponent, IgcCalendarComponent);

@customElement('app-my-tasks')
export default class MyTasks extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .left_nav {
      background-color: hsla(var(--igc-surface-500));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 28px 16px;
      width: 250px;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      padding: 0 16px 0 0;
      min-width: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .content_section {
      background-color: hsla(var(--igc-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
      position: relative;
      padding: 16px 32px 26px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .content_toolbar {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 32px 0 0;
      min-width: 375px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 300px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .h6 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .text {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .content {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--igc-gray-700));
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--igc-gray-500));
    }
    .h5 {
      color: #D4D5D9;
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .h6_1 {
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .calendar {
      margin: 0 0 32px;
      width: max-content;
      height: max-content;
    }
    .icon_3 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #E83180;
    }
    .icon_4 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #72DA67;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
    .list {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .list_1 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .button {
      width: max-content;
      height: max-content;
      min-width: min-content;
    }
    .button_1 {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_2 {
      margin: 0 4px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_3 {
      margin: 0 8px 0 0;
    }
    .button_4 {
      margin: 0 0 16px;
      width: max-content;
      height: max-content;
      min-width: min-content;
    }
    .button_5 {
      margin: 0 0 8px;
      width: max-content;
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--igc-secondary-500));
    }
    .button_1::part(base) {
      color: hsla(var(--igc-secondary-500));
    }
    .button_2::part(base) {
      color: hsla(var(--igc-secondary-500));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout left_nav">
        <h6 class="h6">
          Tasks
        </h6>
        <div class="row-layout group">
          <p class="typography__body-1 text">
            VD Team
          </p>
          <igc-badge class="badge">
            11
          </igc-badge>
        </div>
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 content">
            LISTS
          </p>
          <igc-list class="list">
            <igc-list-item>
              <div slot="title">General</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">App Builder</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Indigo.Design</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Marketing</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Customer Portal</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              add
            </span>
            <span>FILTER</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout group_2">
          <p class="typography__subtitle-2 content">
            FILTERS
          </p>
          <igc-list class="list">
            <igc-list-item>
              <div slot="title">Due this Week</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Overdue</div>
              <div slot="end">
                <span class="material-icons icon_1">
                  more_vert
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              add
            </span>
            <span>FILTER</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout content_section">
        <div class="row-layout content_toolbar">
          <h5 class="h5">
            VD Team
          </h5>
          <igc-button variant="flat" class="button_1">
            <span class="material-icons">
              list
            </span>
            <span>LIST</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button_2">
            <span class="material-icons">
              calendar_view_day
            </span>
            <span>SECTION</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button_2">
            <span class="material-icons">
              dns
            </span>
            <span>FIELDS</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="icon-button button_3">
            <span class="material-icons">
              filter_list
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="icon-button">
            <span class="material-icons">
              more_vert
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout group_3">
          <div class="column-layout group_4">
            <h6 class="h6_1">
              Developer Tools
            </h6>
            <p class="typography__subtitle-2 content">
              Release 2020.2
            </p>
            <igc-list class="list_1">
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Download any Ultimate product and take notes on the download process</div>
                <div slot="subtitle">Product download process experience</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Report about the downloaded ultimate products to the Marketing Team</div>
                <div slot="subtitle">Product download process experience</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
            </igc-list>
            <igc-button variant="flat" class="button_4">
              <span class="material-icons">
                add
              </span>
              <span>task</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <h6 class="h6_1">
              App Builder
            </h6>
            <p class="typography__subtitle-2 content">
              September release - Sprint 1
            </p>
            <igc-list class="list_1">
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Research new sample app</div>
                <div slot="subtitle">New sample application</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Create visual design for new sample app</div>
                <div slot="subtitle">New sample application</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Implementation for new sample app</div>
                <div slot="subtitle">New sample application</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Tweaks in List component</div>
                <div slot="subtitle">App Builder UI Components</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">QE of new App Builder components</div>
                <div slot="subtitle">App Builder UI Components</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="start">
                  <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar4.png" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">Implementation of Chips component</div>
                <div slot="subtitle">App Builder UI Components</div>
                <div slot="end">
                  <span class="material-icons icon_2">
                    more_vert
                  </span>
                </div>
              </igc-list-item>
            </igc-list>
            <igc-button variant="flat" class="button_5">
              <span class="material-icons">
                add
              </span>
              <span>Task</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <div class="column-layout group_5">
            <igc-calendar class="calendar"></igc-calendar>
            <h6 class="content">
              Release Calendar
            </h6>
            <igc-list class="list_1">
              <igc-list-item>
                <div slot="title">App Builder</div>
                <div slot="subtitle">Product download process experience</div>
                <div slot="end">
                  <span class="material-icons icon_3">
                    check_circle
                  </span>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div slot="title">Ultimate Products Review</div>
                <div slot="subtitle">08.13.2020</div>
                <div slot="end">
                  <span class="material-icons icon_4">
                    error
                  </span>
                </div>
              </igc-list-item>
            </igc-list>
          </div>
        </div>
      </div>
    `;
  }
}
