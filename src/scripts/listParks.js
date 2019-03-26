const listNationalParks = () => {
  getAllParks().then(parksArray => {
    console.log("parksArray", parksArray)
    let nationParksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      nationParksFragment.appendChild(parkHtml);
    });

    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(nationParksFragment)
  });
};

const listNationalMonuments = () => {
  getAllMonuments().then(monumentsArray => {
    console.log("MonumentsArray", monumentsArray)
    let nationalMonumentsFragment = document.createDocumentFragment();

    monumentsArray.forEach(monument => {
      let monumentHtml = buildMonumentHtml(monument);
      nationalMonumentsFragment.appendChild(monumentHtml);
    });
    const nationalMonumentSection = document.querySelector("#national--monuments");
    clearElement(nationalMonumentSection);
    nationalMonumentSection.appendChild(nationalMonumentsFragment);
  });
};