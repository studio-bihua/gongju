# Functions

## Table of Contents

- [Dom](#Dom)
- [eventBus](#eventBus)



## Dom
- getRectangle
    - params : Node element
    - return : {
        ...getBoundingClientRect
        relativeRight,
        relativeBottom,
    }
- isVisible
    - params: Node element
    - return: true if element is visible to the user 
- isElement
    - params: Node element
    - return: true if element is HTML element 
- isTypoReady
    - ⚠️ asynchrone
    - params: 
    - return: true when typo is loaded
- scrollTrigger
    - this function recreate the GSAP ScrollTrigger behaviour. The callBack function is updated automatically and get the progression in params.
    - {triggerElement,timeline,end,pin,pinEnd}, callBack
    - return: 
- getTransformProperties
    - params: Node element;
    - return: { 
        translateX,
        translateY
    }
- getDocument
    return the current dom
- getWindow
    return the current window




## eventBus
This script is useFull to handle events.
- on 
    - allow to listen an event.
    - params: name:string, callBack:function

- dispatch 
    - allow to create an event.
    - params: name:string, data:object

- remove 
    - allow to stop listening an event.
    - params: name:string, callBack:function







