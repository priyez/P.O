import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


gsap.defaults({
  ease: "power4.out", 
  overwrite: "auto"
});


const issueWrapper = document.querySelector(".issueWrapper");

// mediaqueries
ScrollTrigger.matchMedia({
  
  // min-width 960s
  "(min-width: 960px)": function() {
    
    let tween = gsap.set({}, {});
    let tl = gsap.timeline();
    
    // follow cursor
    function moveBookImage(e) {
      let xpos = e.clientX;
      let ypos = e.clientY;
      
      tween.kill();
      tween = gsap.to(issueWrapper, {
        x: xpos,
        y: ypos,
      });
    }
    
    // for each issue
    gsap.utils.toArray(".content-right .row-content").forEach((issue) => {

      var issueVidSRC = issue.querySelector(".img-hover").src;
      var issueVidHeight = issue.querySelector(".img-hover").naturalHeight;
      var issueVidWidth = issue.querySelector(".img-hover").naturalWidth;
      var issueVidProportion = issueVidWidth / issueVidHeight;
      var issueVidTargetedWidth = 200;
      var issueVidTargetedHeight = issueVidTargetedWidth / issueVidProportion;
      
      function bookHover(e) {
        if (e.type === "mouseenter") {
          tl.clear();
          tl.set(issueWrapper, {backgroundImage: "url('" + issueVidSRC + "'", backgroundSize: issueVidTargetedWidth + "px " + issueVidTargetedHeight + "px", width: issueVidTargetedWidth*0.9, height: issueVidTargetedHeight*0.9});
          tl.set(issue, {backgroundColor: "transparent"});
          tl.to(issueWrapper, {autoAlpha: 1, rotate: 10, backgroundSize: issueVidTargetedWidth + "px " + issueVidTargetedHeight + "px", width: issueVidTargetedWidth, height: issueVidTargetedHeight, duration: 1.6});
        } else if (e.type === "mouseleave") {
          tl.clear();
          tl.set(issue, {backgroundColor: "transparent"});
          tl.to(issueWrapper, {autoAlpha: 0, rotate: 0, backgroundSize: issueVidTargetedWidth * 1.2 + "px " + issueVidTargetedHeight * 1.2 + "px", width: issueVidTargetedWidth*0.6, height: issueVidTargetedHeight*0.6, duration: 1});
        }
      }

      issue.addEventListener("mouseenter", bookHover);
      issue.addEventListener("mouseleave", bookHover);
      issue.addEventListener("mousemove", moveBookImage);
    });






    
    
    // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
    return function() {   
      // other cleanup code can go here. 
      // tl_bookIn.kill();
      // tl_bookOut.kill();
      tween.kill();
      tl.kill();
    };
  },	
 

  // mobile
  "(min-width: 600px) and (max-width: 959px)": function() {
    
    // other animations that aren't ScrollTrigger-related...    

    // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
    return function() {     
      // other cleanup code can go here. 
    };
  },
    
  // desktop
  "(max-width: 599px)": function() {

      
  let tween = gsap.set({}, {});
  let tl = gsap.timeline();
  
  // follow cursor
  function moveBookImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    
    tween.kill();
    tween = gsap.to(issueWrapper, {
      x: xpos,
      y: ypos,
    });
  }
  
  // for each issue
  gsap.utils.toArray(".content-right .row-content").forEach((issue) => {
    var issueVidSRC = issue.querySelector(".img-hover").src;
    var issueVidHeight = issue.querySelector(".img-hover").naturalHeight;
    var issueVidWidth = issue.querySelector(".img-hover").naturalWidth;
    var issueVidProportion = issueVidWidth / issueVidHeight;
    var issueVidTargetedWidth = 200;
    var issueVidTargetedHeight = issueVidTargetedWidth / issueVidProportion;
    
    function bookHover(e) {
      if (e.type === "mouseenter") {
        tl.clear();
        tl.set(issueWrapper, {backgroundImage: "url('" + issueVidSRC + "'", backgroundSize: issueVidTargetedWidth + "px " + issueVidTargetedHeight + "px", width: issueVidTargetedWidth*0.12, height: issueVidTargetedHeight*0.12});
        tl.set(issue, {backgroundColor: "transparent"});
        tl.to(issueWrapper, {autoAlpha: 1, rotate: 10, backgroundSize: issueVidTargetedWidth + "px " + issueVidTargetedHeight + "px", width: issueVidTargetedWidth, height: issueVidTargetedHeight, duration: 1.6});
      } else if (e.type === "mouseleave") {
        tl.clear();
        tl.set(issue, {backgroundColor: "transparent"});
        tl.to(issueWrapper, {autoAlpha: 0, rotate: 0, backgroundSize: issueVidTargetedWidth * 1.2 + "px " + issueVidTargetedHeight * 1.5 + "px", width: issueVidTargetedWidth*0.8, height: issueVidTargetedHeight*0.8, duration: 1});
      }
    }
    issue.addEventListener("mouseenter", bookHover);
    issue.addEventListener("mouseleave", bookHover);
    issue.addEventListener("mousemove", moveBookImage);
  });
  

  
  }
  
	
});








