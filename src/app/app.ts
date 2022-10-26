import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDropdownComponent, IgcIconComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcDropdownComponent, IgcAvatarComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .header {
      background-color: hsla(var(--igc-success-500));
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 12px 20px;
      height: 60px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .image {
      object-fit: cover;
      margin: 0 8px 0 0;
      width: 26px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .project-dropdown {
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 0 16px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_2 {
      margin: 0 8px 0 0;
    }
    .section {
      flex-shrink: 0;
    }
    .button::part(base) {
      color: hsla(var(--igc-gray-900));
    }
    .project-dropdown::part(base) {
      width: 222px;
      height: max-content;
    }
    .button_1::part(base) {
      color: hsla(var(--igc-surface-500));
      background-color: hsla(var(--igc-gray-900));
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: min-content;
      flex-shrink: 0;
    }
    .view-container {
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
  `;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#project-dropdown')
  public projectDropdown?: IgcDropdownComponent;

  @query('#button-1')
  public button1?: IgcButtonComponent;

  @query('#section')
  public section?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout header">
        <div class="row-layout group">
          <img src="https://static.infragistics.com/marketing/slingshot/slingshot-icon.svg" class="image" />
          <igc-button variant="flat" @click=${() => this.projectDropdown?.toggle(this.button)} id="button" class="button">
            <span>Home</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="project-dropdown" class="project-dropdown">
            <igc-dropdown-item>
              Home
            </igc-dropdown-item>
            <igc-dropdown-item>
              Company Inc.
            </igc-dropdown-item>
            <igc-dropdown-header>
              INDIGO.DESIGN
            </igc-dropdown-header>
            <igc-dropdown-item>
              Growth hacking
            </igc-dropdown-item>
            <igc-dropdown-item>
              Public preview
            </igc-dropdown-item>
            <igc-dropdown-item>
              UX Feedback
            </igc-dropdown-item>
            <igc-dropdown-header>
              Reveal
            </igc-dropdown-header>
            <igc-dropdown-item>
              Onboarding
            </igc-dropdown-item>
            <igc-dropdown-item>
              Analytics
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout group_1">
          <igc-button @click=${() => this.section?.toggle(this.button1)} id="button-1" class="button_1">
            <span class="material-icons">
              add
            </span>
            <span>Task</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="icon-button button_2">
            <span class="material-icons">
              add_alert
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="icon-button button_2">
            <span class="material-icons">
              message
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
          <igc-dropdown id="section" class="section">
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
      </div>
      <div class="row-layout group_2">
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-item onclick="location.href='/my-tasks'">
              <span slot="icon">
                <span class="material-icons icon">
                  assignment_turned_in
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item onclick="location.href='/dashboards'">
              <span slot="icon">
                <span class="material-icons icon">
                  dashboard
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  vertical_split
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  bar_chart
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  folder
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Title goes here</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
