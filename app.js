// get all the bars
const bars = document.querySelectorAll(".bar");

// loop through the bars and add a tooltip to each one
bars.forEach((bar) => {
  // get the value of the bar
  const value = bar.previousElementSibling;
  // create a tooltip element
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerHTML = value.innerHTML;
  // append the tooltip to the bar
  bar.appendChild(tooltip);
  // add the "hidden" class to the value element
  value.classList.add("hidden");

  // show the tooltip when the user hovers over the bar
  bar.addEventListener("mouseover", () => {
    tooltip.style.display = "block";
  });

  // hide the tooltip when the user moves the mouse away from the bar
  bar.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });
});
