import { select } from "d3-selection";

const firstCircle = select("svg")
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 40)
  .attr("fill", "red");

const secondCircle = select("svg")
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 40)
  .attr("fill", "red");

const thirdCircle = select("svg")
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 40)
  .attr("fill", "red");

thirdCircle.attr("fill", "peachpuff");
firstCircle.attr("cx", 100);
secondCircle.attr("cx", 200);

firstCircle.text("Hello");

select("svg")
  .append("text")
  .attr("x", 10)
  .attr("y", 100)
  .text("Premier cercle");

select("svg")
  .append("text")
  .attr("x", 200)
  .attr("y", 200)
  .text("Deuxième cercle");

select("svg")
  .append("text")
  .attr("x", 300)
  .attr("y", 300)
  .text("Troisième cercle");

thirdCircle.on("click", () => {
  firstCircle.attr("cx", "250");
  secondCircle.attr("cx", "250");
  thirdCircle.attr("cx", "250");
});

const array = [20, 5, 25, 8, 15];

array.forEach((element) => {
  console.log(element);
});
