import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcIconComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-dashboards')
export default class Dashboards extends LitElement {
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
    .group {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 28px 16px;
      width: 250px;
      min-width: 250px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      background-color: hsla(var(--igc-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      flex-grow: 1;
    }
    .card {
      margin: 0 24px 24px 0;
      width: 240px;
      height: max-content;
      min-width: 240px;
      flex-shrink: 0;
    }
    .h6 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--igc-gray-500));
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--igc-gray-900));
    }
    .h5 {
      color: #D4D5D9;
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .image {
      height: 100%;
    }
    .media-content {
      height: 120px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .list {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .button {
      z-index: 1;
      right: 24.144861681707958px;
      bottom: 24px;
      position: fixed;
      width: max-content;
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h6 class="h6">
          Dashboards
        </h6>
        <igc-list class="list">
          <igc-list-item>
            <div slot="title">Dashboards</div>
            <div slot="end">
              <span class="material-icons icon">
                dashboard
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Favorites</div>
            <div slot="end">
              <span class="material-icons icon">
                star
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Recent</div>
            <div slot="end">
              <span class="material-icons icon_1">
                access_time
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Samples</div>
            <div slot="end">
              <span class="material-icons icon">
                ballot
              </span>
            </div>
          </igc-list-item>
        </igc-list>
      </div>
      <div class="column-layout group_1">
        <div class="row-layout group_2">
          <h5 class="h5">
            Recent
          </h5>
        </div>
        <div class="row-layout group_3">
          <igc-card ?elevated="${true}" class="card">
            <igc-card-media class="media-content">
              <img src="https://static.infragistics.com/marketing/reveal/reveal-app-data-visualization-dashboard-screenshot-768.jpg?v=201812181150" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                Artists Analysis
              </h3>
              <h5 slot="subtitle">
                Jun 15, 2020 - Jason Anderson
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  star_border
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-card ?elevated="${true}" class="card">
            <igc-card-media class="media-content">
              <img src="https://static.infragistics.com/marketing/reveal/reveal-app-data-visualization-decision-making-create-chart-types-graphic-768.jpg?v=201812181150" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                For evaluation
              </h3>
              <h5 slot="subtitle">
                Jun 15, 2020 - Martina Roberts
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  star
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-card ?elevated="${true}" class="card">
            <igc-card-media class="media-content">
              <img src="https://static.infragistics.com/marketing/reveal/reveal-app-data-visualization-dashboard-screenshot-768.jpg?v=201812181150" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                Stylescape Results
              </h3>
              <h5 slot="subtitle">
                Jun 15, 2020 - Caroline Sanders
              </h5>
            </igc-card-header>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  star_border
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="flat" class="icon-button">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-button variant="fab" class="button">
            <span class="material-icons">
              add
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
    `;
  }
}
