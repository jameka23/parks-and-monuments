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
