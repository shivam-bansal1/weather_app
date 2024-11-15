import { createLeftSection } from "./script.js";
import { createRightSection } from "./script.js";

function renderWebsite() {
  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(createLeftSection());
  container.appendChild(createRightSection());
  document.body.appendChild(container);
}

renderWebsite();
