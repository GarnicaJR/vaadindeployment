import { LitElement, html, css, customElement } from 'lit-element';

@customElement('myportal-view')
export class MyportalView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--lumo-space-m) var(--lumo-space-l);
      }
    `;
  }

  render() {
    return html`
      <h1>Shellexecute</h1>
    `;
  }
}
