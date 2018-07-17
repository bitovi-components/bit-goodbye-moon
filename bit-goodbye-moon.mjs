import {Component} from "//unpkg.com/can@5/core.mjs";

export default Component.extend({
    tag: "goodbye-moon",
    view: `<h1>{{greeting}} moon.</h1>`,
    ViewModel: {
        greeting: {default: "Goodbye"}
    }
});
