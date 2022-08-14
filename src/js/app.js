import barba from '@barba/core';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Cursor } from "./components/cursor";
import { HoverEffect } from "./components/hoverEffect";
import { Vid } from "./components/vid";
import { Home } from "./pages/Home";


// 
// function pageTransition() {
  // var tl = gsap.timeline();
// 
  // tl.to(".transition-cover li", {
      // duration: 0.5,
      // scaleY: 1,
      // transformOrigin: "bottom left",
      // stagger: 0.2,
  // });
// 
  // tl.to(".transition-cover li", {
      // duration: 0.5,
      // scaleY: 0,
      // transformOrigin: "bottom left",
      // stagger: 0.1,
      // delay: 0.1,
  // });
// }
// 
function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


barba.init({
  sync: true,

  transitions: [
      {
          async leave(data) {
              const done = this.async();
              // pageTransition();
              await delay(1500);
              done();
          },

          async enter(data) {
            Home();
          },

          async once(data) {
            Home();
          },
      },
  ],
});

HoverEffect()
Cursor()
Vid()