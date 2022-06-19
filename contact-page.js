import {LitElement, css, html} from 'lit';

export class ContactPage extends LitElement {
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
    <div class="grid grid-cols-1 items-center h-[100vh] w-[100vw]">
    <div class="">
      <h1 class="text-7xl text-white text-center font-black">Contact Page</h1>
    </div>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('contact-page', ContactPage);