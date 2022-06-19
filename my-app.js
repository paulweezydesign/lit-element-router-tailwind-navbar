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
import "./about-page.js";
import "./kittens-page.js";
import "./contact-page.js";
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
    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="/">My Cute Kittens</a>
                <button
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" onclick="toggleNavbar('example-collapse-navbar')">
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>

      <app-link href="/">Home</app-link>
      <app-link href="/about">About</app-link>
      <app-link href="kittens">Kittens</app-link>
      <app-link href="contact">Contact</app-link>
    </nav>
      <app-main active-route=${this.route}>
        <div route="home">
          <home-page></home-page>
        </div>
        <div route="about">
          <about-page></about-page>
        </div>
        <div route="kittens">
          <kittens-page></kittens-page>
        </div>
        <div route="contact">
          <contact-page></contact-page>
        </div>
        
        <h1 route="not-found">Not Found</h1>
      </app-main>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("my-app", App);
