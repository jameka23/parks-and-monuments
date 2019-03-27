const handleDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks());
};

const handleVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks());
};

const handleEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  // const returnedPark = getPark(parkId)
  const editedMonumentName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
  const editedParkVisited = document.querySelector("input[name='visited']:checked");
  console.log(editedParkVisited);


  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: Boolean(editedParkVisited)
  };
  console.log(editedPark)

  putPark(parkId, editedPark).then(() => listNationalParks());
};
// ============================================ MONUMENTS ========================================
const handleDeleteMonument = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];

  deleteMonument(monumentId).then(() => listNationalMonuments());
};

const handleVisitedMonument = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];

  let visitedMonumentObject = {
    visited: true
  };

  patchMonument(monumentId, visitedMonumentObject).then(() => listNationalMonuments());
};

const handleEditMonument = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let monumentId = event.target.parentNode.id.split("--")[1];

  const monumentArticle = document.querySelector(`#national-monument--${monumentId}`);
  clearElement(monumentArticle);

  getMonument(monumentId).then(monumentToEdit => {
    const editFormForMonument = monumentEditForm(monumentToEdit);
    monumentArticle.appendChild(editFormForMonument);
  });
};

const handleUpdateMonument = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentId = event.target.parentNode.id.split("--")[1];

  // const returnedPark = getPark(monumentId)
  const editedMonumentName = document.querySelector(`#edit-monument-name--${monumentId}`);
  const editedMonumentState = document.querySelector(`#edit-monument-state--${monumentId}`);
  const editedMonumentArea = document.querySelector(`#edit-monument-area--${monumentId}`);
  const editedMonumentEstablished = document.querySelector(`#edit-monument-established--${monumentId}`);
  const editedMonumentVisited = document.querySelector("input[name='visited']:checked");
  console.log(editedMonumentVisited);


  let editedMonument = {
    name: editedMonumentName.value,
    state: editedMonumentState.value,
    area: editedMonumentArea.value,
    dateEstablished: editedMonumentEstablished.value,
    visited: Boolean(editedMonumentVisited)
  };
  console.log(editedMonument)

  putMonument(monumentId, editedMonument).then(() => listNationalMonuments());
};

