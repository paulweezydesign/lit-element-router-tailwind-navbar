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
      <div class="flex flex-col justify-center p-2">
       <h1 class="m-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-black">Come adopt my cute <br>ass kittens</h1>
       <p class="text-lg text-white/90 tracking-wide font-light">They deserve a good home with plenty of love.</p>
      </div>
    </div>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('home-page', HomePage);