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
    e.stopPropagation()
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
  outerdiv.style.display = "none";
});

/**
 * Event Bubbling -> It is a concept in the DOM by which when an element 
 * receives an event and that event bubble up or we can say this event go 
 * to their parent elements in the dom tree untill it reaches to the root element
 * this process is known as event bubbling.
 * 
 * 
 * 
 * As we can see in the above code when we click on a image the 
 * controls goes to the div and it changes the display to none .
 * 
 * 
 * to stop this behaviour we use an event stopropogation(). 
 * At whatever place we want to stop the propogation we can use this.
 *
 * 
 * Note -> In this the event goes from inside to outside which means 
 * it starts move from the inner most div and goes to the outer div.
 * 
 * 
 * 
 * "Event bubbling is a phenomenon in JavaScript where, during an event 
 * like a click or keypress, the event doesn't just occur on the exact 
 * element you interacted with but also bubbles up through its ancestors 
 * in the DOM hierarchy. This means that if you click on a nested element 
 * within a larger container, the click event will first be triggered on 
 * the innermost element and then propagate or 'bubble up' through its parent elements.

For example, if you have a div inside another div and you click on the inner 
div, the click event will be detected first on the inner div and then on the 
outer div. This behavior is the default in the DOM, and it allows you to set 
event listeners on higher-level parent elements to capture events that occur 
on their descendants. It's a fundamental concept in event handling in JavaScript 
and is used to efficiently manage and capture events throughout a document."
 * 
 */
