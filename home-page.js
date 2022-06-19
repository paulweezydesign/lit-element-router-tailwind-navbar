import {LitElement, css, html} from 'lit';

export class HomePage extends LitElement {
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
       <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center font-black">Come adopt my cute ass kittens</h1>
      </div>
    </div>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('home-page', HomePage);