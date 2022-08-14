import gsap from "gsap";

export default class cursorComp {
  constructor() {
this.cusor();
  }





  cusor=()=>{

    const $bigCircle = document.querySelector('.cursor__circle--big');
    const $smallCircle = document.querySelector('.cursor__circle--small');
    const $smallPlus = document.querySelector('.cursor__plus');
    const $smallPlusArea = document.querySelector('.cursor__plus--area')
    const $hoverables = document.querySelectorAll('.hoverable');
    const hoverablesArea = document.querySelectorAll('.hoverableArea');
    
    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
    
    for (let i = 0; i < hoverablesArea.length; i++) {
      hoverablesArea[i].addEventListener('mouseenter', onMouseHoverArea);
      hoverablesArea[i].addEventListener('mouseleave', onMouseHoverAreaOut);
    }
    
    // Move the cursor
    function onMouseMove(e) {
      gsap.to($bigCircle, .4, {
        x: e.clientX,
        y: e.clientY,
      })
      gsap.to($smallCircle, .1, {
        x: e.clientX,
        y: e.clientY
      })
      gsap.to($smallPlus, .1, {
        x: e.clientX,
        y: e.clientY
      })
    }
    
    // Hover an element
    function onMouseHover() {
      gsap.to('#bigCircle', {
        attr: {
          r: 25
        }
      })
    }
    function onMouseHoverOut() {
      gsap.to('#bigCircle', {
        attr: {
          r: 18
        }
      })
    }
    
    // Hover img an element
    function onMouseHoverArea() {
      gsap.to($bigCircle, .3, {
        fill: '#212121',
        mixBlendMode: 'normal'
      })
      gsap.to($smallCircle, .3, {
        fill: 'transparent'
      })
      gsap.to($smallPlusArea, 0.3, {
        stroke: '#DEDEDE'
      })
    }
    function onMouseHoverAreaOut() {
      gsap.to($bigCircle, 0.3, {
        fill: 'transparent',
        mixBlendMode: 'difference'
      })
      gsap.to($smallCircle, 0.3, {
        fill: '#DEDEDE'
      })
      gsap.to($smallPlusArea, 0.3, {
        stroke: 'transparent'
      })
    }
  
  
  
  
  
  }
  
}
new cursorComp();