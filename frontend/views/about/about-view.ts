import { LitElement, html, css, customElement } from 'lit-element';

@customElement('about-view')
export class AboutView extends LitElement {
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
      <br />
      Simple demo to show how to deploy a vaadin into Apps from Digital Ocean,
      <a href="https://github.com/GarnicaJR/vaadindeployment"> Github link</a>
    `;
  }
}
