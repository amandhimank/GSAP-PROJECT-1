var t1 = gsap.timeline();

// from() kyu ? => qki muhe default position pe wapas laana hai, aisa hii animation hai
t1.from("#nav h4", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
    
    // stagger ==> saare elements ek ek karke aayenge[saare h4 ek ek krke aayenge isse]
    stagger: 0.3 // iski value se kya hota hai ==> pehle element ke baad aur sab kitni der baad aayenge wo define hota hai
})


t1.from("#center h1", {
    x: -800,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})


t1.from("img", {
    x: 200,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4
})

t1.from("#bottom h4", {
    x: -1000,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
})
