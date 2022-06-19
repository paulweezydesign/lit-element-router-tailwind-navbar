import {LitElement, css, html} from 'lit';

export class AboutPage extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    
  }

  // Render the UI as a function of component state
  render() {
    return html`
    <div class="">
      <h1 class="text-7xl text-center font-black">About Page</h1>
    </div>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('about-page', AboutPage);