const buildElement = (elementType, elementId, elementTextContent, elementValue, elementAttribute) => {
  let htmlElement = document.createElement(elementType);
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
  }

  if (elementValue) {
    htmlElement.setAttribute("value", elementValue);
  }

  if (elementValue === true && elementAttribute === "radio"){
    console.log(elementValue);
    htmlElement.setAttribute("type", elementAttribute);
    htmlElement.setAttribute("name", "visited");
    htmlElement.setAttribute("value", Boolean(elementValue));
  }else if(elementValue === false && elementAttribute === "radio"){
    console.log("should not happen", elementValue);
    htmlElement.setAttribute("type", elementAttribute);
    htmlElement.setAttribute("name", "not visited");
    htmlElement.setAttribute("value", false);
  }

  htmlElement.textContent = elementTextContent;
  return htmlElement;
};


const clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "national--parks"));
displayContainer.appendChild(buildElement("section", "national--monuments"));
// must append a nother display container for all the monuments
