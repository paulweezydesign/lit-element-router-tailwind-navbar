/**
 * LitElement Router
 *
 * https://github.com/hamedasemi/lit-element-router
 * https://www.npmjs.com/package/lit-element-router
 */

import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import { LitElement, html } from "lit-element";
import { router } from "lit-element-router";

import "./app-link";
import "./app-main";
import "./home-page.js";
@router
class App extends LitElement {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object }
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" }
      },
      {
        name: "about",
        pattern: "about"
      },
      {
        name: "kittens",
        pattern: "kittens"
      },
      {
        name: "contact",
        pattern: "contact"
      },
      {
        name: "not-found",
        pattern: "*"
      }
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-link href="/">Home</app-link>
      <app-link href="/about">About</app-link>
      <app-link href="kittens">Kittens</app-link>
      <app-link href="contact">Contact</app-link>

      <app-main active-route=${this.route}>
        <div route="home">
          <home-page></home-page>
        </div>
        <div route="about">About</div>
        <div route="kittens">Kittens</div>
        <div route="contact">Contact</div>
        
        <h1 route="not-found">Not Found</h1>
      </app-main>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("my-app", App);
