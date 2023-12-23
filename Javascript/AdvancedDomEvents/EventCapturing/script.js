let btn = document.getElementById("btn");
let outerdiv = document.getElementById("outer");
let img = document.getElementById("image");

btn.addEventListener("click", () => {
  if (outerdiv.style.display != "none") {
    outerdiv.style.display = "none";
  } else {
    outerdiv.style.display = "block";
  }
});

img.addEventListener("click", (e) => {
    console.log("inside the image div")
  let toggle = img.getAttribute("data-toggle");
  if (toggle == "0") {
    img.src =
      "https://i.pinimg.com/474x/ba/45/62/ba456219517777e7808e10c685c2a0ee.jpg";
    img.setAttribute("data-toggle", "1");
  } else {
    img.src =
      "https://i.pinimg.com/564x/fe/cc/e2/fecce21a45182a1d0299de9e10e1b84d.jpg";
    img.setAttribute("data-toggle", "0");
  }
});

outerdiv.addEventListener("click", () => {
    console.log("inside the outer div");
  if(outerdiv.style.padding=="20px"){
    outerdiv.style.padding="40px";
  }
  else{
    outerdiv.style.padding="20px";
  }
},{capture:true});

/**
 * 
 * Event Capture -> It is same as event bubbling but it works in reverse order 
 * 
 * which means as we know in event bubbling controls move from the 
 * inner most div to the outer div but in CAPTURING controls move from outer to the inner most div.
 * 
 * To do capturing we write {capture:true}  
 * 
 * 
 * 
 * There are 3 phases of event propogation 
 * 
 * 1 -> Capturing 
 * 
 * 2-> targetting 
 * 
 * 3-> bubbling
 * 
 */