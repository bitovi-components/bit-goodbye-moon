import { StacheElement } from "//unpkg.com/can@6/core.mjs";

export default class GoodbyeMoon extends StacheElement {
  static view = `<h1>{{ this.greeting }} moon.</h1>`;

  static props = {
    greeting: { default: "Goodbye" }
  };
}

customElements.define("goodbye-moon", GoodbyeMoon);
