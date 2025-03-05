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
