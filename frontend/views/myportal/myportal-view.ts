import { LitElement, html, css, customElement } from 'lit-element';

@customElement('myportal-view')
export class MyportalView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--lumo-space-m) var(--lumo-space-l);
      }

      .title{
        font: bold 36px asap,arial;
      }

      .urlbox{
        margin: 0 auto 20px auto;
        box-shadow: 0 1px 4px #ccc;
        border-radius: 2px;
        padding: 30px;
        background: #fff;
        text-align: center;
      }

      #form{
        max-width: 600px;
        display: flex;
        margin: 0 auto;
      }

      #form input[type=text]{
        display: table-cell;
        width: 100%;
        height: 45px;
        padding: 10px 16px;
        font: 17px lato,arial;
        color: #000;
        background: #fff;
        border: 1px solid #bbb;
        border-right: 0;
        border-radius: 3px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        box-sizing: border-box;
      }

      #form-button{
        display: table-cell;
      }

      #form-button input[type=button]{
        height: 45px;
        padding: 10px 16px;
        font: bold 17px lato,arial;
        color: #fff;
        background-color: hsl(214deg 35% 21%);
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        border: 0;
        border-radius: 3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
        -webkit-appearance: button;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="urlbox">
        <h2 class="title">Shorting URL's 24/7</h2>

        <div id="form">
          <input type="text"  placeholder="Enter Link Here"/>
          <div id="form-button">
            <input type="button" value="Shorten URL"/>
          </div>
        </div>
        <p>This is a service to provide URL shortner in a simple way</p>
      </div>
    `;
  }
}
