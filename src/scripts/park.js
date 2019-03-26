const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name, undefined))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state, undefined))

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude, undefined))

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude, undefined))

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))
  editFormFragment.appendChild(buildElement("label", undefined, "True"))
  editFormFragment.appendChild(buildElement("input", `edit-park-visited--${parkObject.id}`,undefined, true, "radio"));

  editFormFragment.appendChild(buildElement("label", undefined, "False"))
  editFormFragment.appendChild(buildElement("input", `edit-park-not-visited--${parkObject.id}`,undefined, false, "radio"));

  // elementType, elementId, elementTextContent, elementValue, elementAttribute
  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}
// =================================================== MONUMENTS ===========================================
const buildMonumentHtml = monumentObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const monumentArticle = buildElement("article", `national-monument--${monumentObject.id}`);
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));
  monumentArticle.appendChild(buildElement("p", undefined, monumentObject.dateEstablished));

  if(monumentObject.visited !== true) {
    let visitedMonumentButton = buildElement("button", undefined, "Visited Monument");
    monumentArticle.appendChild(visitedMonumentButton);
    visitedMonumentButton.addEventListener("click", handleVisitedMonument);
  }

  let editMonumentButton = buildElement("button", undefined, "Edit monument");
  monumentArticle.appendChild(editMonumentButton);
  editMonumentButton.addEventListener("click", handleEditMonument);

  let deleteMonumentButton = buildElement("button", undefined, "Delete monument");
  monumentArticle.appendChild(deleteMonumentButton);
  deleteMonumentButton.addEventListener("click", handleDeleteMonument);
  return monumentArticle;
};

  const monumentEditForm = (monumentObject) => {
  let editFormFragment = document.createDocumentFragment();

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "));
  editFormFragment.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name, undefined));

  editFormFragment.appendChild(buildElement("label", undefined, "State: "));
  editFormFragment.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state, undefined));

  editFormFragment.appendChild(buildElement("label", undefined, "Area: "));
  editFormFragment.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area, undefined));

  editFormFragment.appendChild(buildElement("label", undefined, "Date Established: "));
  editFormFragment.appendChild(buildElement("input", `edit-monument-established--${monumentObject.id}`, undefined, monumentObject.dateEstablished, undefined));

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "));
  editFormFragment.appendChild(buildElement("label", undefined, "True"));
  editFormFragment.appendChild(buildElement("input", `edit-monument-visited--${monumentObject.id}`,undefined, true, "radio"));

  editFormFragment.appendChild(buildElement("label", undefined, "False"));
  editFormFragment.appendChild(buildElement("input", `edit-monument-not-visited--${monumentObject.id}`,undefined, false, "radio"));

  // elementType, elementId, elementTextContent, elementValue, elementAttribute
  const updateMonumentButton = buildElement("button", undefined, "Update");
  updateMonumentButton.addEventListener("click", handleUpdateMonument);
  editFormFragment.appendChild(updateMonumentButton);

  return editFormFragment;
}
