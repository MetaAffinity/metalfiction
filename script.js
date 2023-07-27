function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./banner_out0001.jpg
     ./banner_out0002.jpg
     ./banner_out0003.jpg
     ./banner_out0004.jpg
     ./banner_out0005.jpg
     ./banner_out0006.jpg
     ./banner_out0007.jpg
     ./banner_out0008.jpg
     ./banner_out0009.jpg
     ./banner_out0010.jpg
     ./banner_out0011.jpg
     ./banner_out0012.jpg
     ./banner_out0013.jpg
     ./banner_out0014.jpg
     ./banner_out0015.jpg
     ./banner_out0016.jpg
     ./banner_out0017.jpg
     ./banner_out0018.jpg
     ./banner_out0019.jpg
     ./banner_out0020.jpg
     ./banner_out0021.jpg
     ./banner_out0022.jpg
     ./banner_out0023.jpg
     ./banner_out0024.jpg
     ./banner_out0025.jpg
     ./banner_out0026.jpg
     ./banner_out0027.jpg
     ./banner_out0028.jpg
     ./banner_out0029.jpg
     ./banner_out0030.jpg
     ./banner_out0031.jpg
     ./banner_out0032.jpg



 `;
  return data.split("\n")[index];
}

const frameCount = 32;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `650% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `650% top`,
});

gsap.to("#metaaffinity>h2",{
  scrollTrigger:{
      trigger:`#metaaffinity>h2`,
      start:`5% top`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  opacity:0
})



var clutter = "";

document.querySelector("#page1>#left>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page1>#left>h1").innerHTML = clutter;
})


gsap.to("#page1>#left>h1>span",{
    scrollTrigger:{
        trigger:`#page1>#left>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

var clutter = "";

document.querySelector("#page2>#left>h3").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>#left>h3").innerHTML = clutter;
})


gsap.to("#page2>#left>h3>span",{
    scrollTrigger:{
        trigger:`#page2>#left>h3>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#bbbbbb`
})

var clutter = "";

document.querySelector("#page2>#right>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>#right>h1").innerHTML = clutter;
})


gsap.to("#page2>#right>h1>span",{
    scrollTrigger:{
        trigger:`#page2>#right>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#bbbbbb`
})
var clutter = "";

document.querySelector("#page2>#left>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>#left>h1").innerHTML = clutter;
})


gsap.to("#page2>#left>h1>span",{
    scrollTrigger:{
        trigger:`#page2>#left>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#bbbbbb`
})



gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})




