function removeElement(element) {
  const elementToRemove=document.getElementById(element)
  elementToRemove.remove()
}

function newDiv(id, parent, position) {
  const newElement = document.createElement("div")
  newElement.setAttribute("id", id)
  if (position != "above") {
    document.getElementById(parent).appendChild(newElement)
  } else {
    document.getElementById(parent).prepend(newElement)
  }
}

function appendHTMLTemplate(template, parent) {
    const element = document.getElementById(template)
    const clone = element.content.cloneNode(true);
    document.getElementById(parent).appendChild(clone)
}

function prependHTMLTemplate(template, parent) {
  const element = document.getElementById(template)
  const clone = element.content.cloneNode(true);
  document.getElementById(parent).prepend(clone)
}  