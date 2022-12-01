/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here

  const myid = document.querySelector("li");
  console.log(myid);

  const warning = document.querySelectorAll("bg-warning");
  warning.forEach((warning) => {
    console.log(warning);
  });

  const button = document.querySelector("button-target");
  console.log(button);

  const socialMediaLinks = document.querySelectorAll("social");
  socialMediaLinks.forEach((link) => {
    console.log(link);
  });

  const inputs = document.querySelectorAll("input");
for (let input of inputs)
    console.log(input);

})();
