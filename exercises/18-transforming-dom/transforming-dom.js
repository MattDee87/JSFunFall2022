/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const image = document.querySelector("img");
  image.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  console.log(image);

 const links = document.querySelectorAll("myID");
links.forEach(link => link.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
console.log(links);

const backgroundColor = document.querySelector("alert alert-info");



})();
