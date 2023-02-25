const linkShows = "https://project-1-api.herokuapp.com/showdates";
const apiKey = "?api_key=b70c7207-fea6-4ea5-98db-d101d901be50";

const tableBody = document.querySelector(".table__body");

showTable();
//function takes data from api response and returns table of schedule of shows on the page
function showTable() {
  const getShows = axios.get(linkShows + apiKey);
  getShows.then((response) => {
    const showsArray = response.data;
    tableBody.innerHTML = "";
    showsArray.forEach((show) => {
      const tableRow = document.createElement("div");
      tableRow.classList.add("table__row");
      tableBody.appendChild(tableRow);

      const tableDate = document.createElement("span");
      tableDate.classList.add("table__date");
      tableDate.classList.add("cell");
      tableDate.setAttribute("data-label", "date");

      tableDate.innerHTML = new Date(Number(show.date)).toDateString();
      tableRow.appendChild(tableDate);

      const tableVenue = document.createElement("span");
      tableVenue.setAttribute("data-label", "venue");
      tableVenue.classList.add("cell");
      tableVenue.innerHTML = show.place;
      tableRow.appendChild(tableVenue);

      const tableCity = document.createElement("span");
      tableCity.setAttribute("data-label", "city");
      tableCity.classList.add("cell");
      tableCity.innerHTML = show.location;
      tableRow.appendChild(tableCity);

      const btnCell = document.createElement("span");
      btnCell.classList.add("cell");
      tableRow.appendChild(btnCell);

      const tableBtn = document.createElement("button");
      tableBtn.classList.add("btn");
      tableBtn.innerHTML = "buy tickets";
      btnCell.appendChild(tableBtn);
    });
  });
}

//On click, clicked row is highlighted. removes all other highlights.
tableBody.addEventListener("click", (event) => {
  const selectedRow = event.target.parentElement;
  const allRows = document.querySelectorAll(".table__row");
  allRows.forEach((row) => {
    row.classList.remove("table__row--selected");
  });
  selectedRow.classList.add("table__row--selected");
});
