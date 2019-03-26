const listNationalMonuments = () => {
    getAllMonuments().then(monumentsArray => {
      console.log("MonumentsArray", monumentsArray)
      let nationalMonumentsFragment = document.createDocumentFragment();

      monumentsArray.forEach(monument => {
        let monumentHtml = buildMonumentHtml(monument);
        nationalMonumentsFragment.appendChild(monumentHtml);
      });
      const nationalMonumentSection = document.querySelector("#national--monument");
      clearElement(nationalMonumentSection);
      nationalMonumentSection.appendChild(nationalMonumentsFragment);
    });
  };