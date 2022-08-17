import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




gsap.registerPlugin(ScrollTrigger)
console.clear()
gsap.defaults({
  ease: "power4.out", 
  overwrite: "auto"
});



// mediaqueries
ScrollTrigger.matchMedia({
  
  // min-width 960s
  "(min-width: 960px)": function() {
    
    let tween = gsap.set({}, {});
    let tl = gsap.timeline();
    


    tl.from( ".quote-container .quote:nth-child(1)",
    {
      duration: 1.5,
      x: -100,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: -0.2,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
  tl.from( ".quote-container .quote:nth-child(2)",
  {
    duration: 1.5,
    y: 100,
    skewY: 3,
    opacity: 0,
    stagger: 0.3,
    delay: -1,
    ease: "Power3.easeOut",
  },
  "+=.3"
)

    gsap.utils.toArray( ".content-right .row-content .col-r h5").forEach(Issue => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: Issue,
          toggleActions: "play none none none",
        },
      })
    tl.from( Issue,
      {
       duration: 2.4,
       y: 70,
       skewY: 3,
       opacity: 0,
       stagger: 0.3,
       delay:-0.3,
       ease: "Power3.easeOut",
      },
      "+=.3"
    )



    })










    
    
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





  let revealContainers = document.querySelectorAll(".cover-img");

  revealContainers.forEach((imgcontainer) => {
    let image = imgcontainer.querySelector(".vids_one");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgcontainer,
        toggleActions: "restart none none reset"
      }
    });
  
    tl.set(imgcontainer, { autoAlpha: 1 });
    tl.from(imgcontainer, 1.5, {
      xPercent: -100,
      ease: "Power2.out"
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease:" Power2.out"
    });
  });

  let tl = gsap.timeline();

gsap.utils.toArray( ".content-right .row-content .col-r h5").forEach(Issue => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: Issue,
      toggleActions: "play none none none",
    },
  })
tl.from( Issue,
  {
    duration: 1.5,
    y: 60,
    skewY: 3,
    opacity: 0,
    stagger: 0.3,
    delay:-0.3,
    ease: "Power3.easeOut",
  },
  "+=.3"
)
})
gsap.utils.toArray( ".content-right .mobile .row-content .col-r p").forEach(desc => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: desc,
      toggleActions: "play none none none",
    },
  })
tl.from( desc,
  {
    duration: 1.5,
    css: {
      transform: "rotate3d(0, 1, 0, 90deg)",
    },
    // delay: 3.3,
    ease: "Expo.easeOut",
    stagger: {
      amount: 1,
    },
  },
  "+=.3"
)
})
gsap.utils.toArray( ["blockquote",".pic-container .pic-text h4"]).forEach(blockquote => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: blockquote,
      toggleActions: "play none none none",
      scrub: true,  
    },
  })
tl.from( blockquote,
  {
    duration: 1.5,
    y: 40,
    skewY: 2,
    opacity: 0,
    stagger: 0.3,
    delay: 0.1,
    ease: "Power3.easeOut",
    },
  "+=.3"
)
})

const imgContainers = document.querySelector(".pic-container .pic .img");
gsap.set(imgContainers, { filter:'grayscale(1)' })
const uncoverImg = gsap.timeline({ paused:true })
uncoverImg.to(imgContainers, { filter:'grayscale(0)', ease: 'none' });
ScrollTrigger.create({  
  trigger: '.pic-container .pic ',
  start: 'center center',
  end: '+=15%',
  animation: uncoverImg,
  scrub: true,  
})


const containers = document.querySelector(".quote-m-container #quote");
gsap.set(containers, { yPercent: 85 })
const uncover = gsap.timeline({ paused:true })
uncover.to(containers, { yPercent: 0, ease: 'none' });
ScrollTrigger.create({  
  trigger: '#quote',
  // markers: true,
  start: 'center center',
  end: '+=35%',
  animation: uncover,
  scrub: true,  
})



gsap.utils.toArray("#text").forEach(TextIntro => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: TextIntro,
      toggleActions: "play none none none",
    },
  })
tl.from( TextIntro,
  {
    duration: 1.5,
    y: 60,
    skewY: 3,
    opacity: 0,
    stagger: 0.3,
    delay:-0.3,
    ease: "Power3.easeOut",
  },
  "+=.3"
)
})


  }
  
	
});






