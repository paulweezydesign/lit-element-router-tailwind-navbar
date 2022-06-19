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
            <div class="lg:flex flex-grow items-center  bg-white lg:bg-transparent lg:shadow-none hidden"
            id="example-collapse-navbar">
              <ul class="flex flex-col lg:flex-row list-none lg:ml-auto uppercase text-white">
                <li class="flex items-center">
                    <app-link  
                        href="/"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ">Home</a></app-link>
                </li>
                <li class="flex items-center">
                 <app-link
                    href="about"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ">About</a></app-link>
                </li>
                <li class="flex items-center">
                  <app-link 
                href="kittens"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ">Kittens</a></app-link>
                </li>
                <li class="flex items-center">
                  <app-link 
            href="contact"><a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ">Contact</a></app-link>
                </li>
              </ul>
            </div>
          </div>
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
