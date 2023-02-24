// const shows = [
//   {
//     date: "Mon Sept 06 2021",

//     venue: "Ronald Lane",

//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",

//     venue: "Pier 3 East",

//     location: "San Francisco, CA",
//   },

//   {
//     date: "Fri Oct 15 2021",

//     venue: "View Lounge",

//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 06 2021",

//     venue: "Hyatt Agency",

//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 26 2021",

//     venue: "Moscow Center",

//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 15 2021",

//     venue: "Press Club",

//     location: "San Francisco, CA",
//   },
// ];

// const show = document.querySelector(".shows");

// for (let j = 0; j < shows.length; j++) {
//   const showsContainer = document.createElement("div");
//   showsContainer.classList.add("shows__container");

//   const dateTitle = document.createElement("h4");
//   dateTitle.classList.add("shows__header__info--date");
//   dateTitle.innerText = "DATE";

//   const showDate = document.createElement("p");
//   showDate.classList.add("shows__header__about__date");
//   showDate.innerText = shows[j].date;

//   const showVenue = document.createElement("h4");
//   showVenue.classList.add("shows__header__info--venue");
//   showVenue.innerText = "VENUE";

//   const venueTitle = document.createElement("p");
//   venueTitle.classList.add("shows__header__about__venue");
//   venueTitle.innerText = shows[j].venue;

//   const showLocation = document.createElement("h4");
//   showLocation.classList.add("shows__header__info--location");
//   showLocation.innerText = "LOCATION";

//   const locationTitle = document.createElement("p");
//   locationTitle.classList.add("shows__header__about__location");
//   locationTitle.innerText = shows[j].location;

//   const showButton = document.createElement("button");
//   showButton.innerText = "BUY TICKETS";
//   showButton.classList.add("shows__btn");

//   showsContainer.appendChild(dateTitle);
//   showsContainer.appendChild(showVenue);
//   dateTitle.appendChild(showDate);
//   showVenue.appendChild(venueTitle);
//   showsContainer.appendChild(showLocation);
//   showLocation.appendChild(locationTitle);
//   showsContainer.appendChild(showButton);

//   show.appendChild(showsContainer);
// }

const link = "https://project-1-api.herokuapp.com/showdates";
const apiKey = "?api_key=b70c7207-fea6-4ea5-98db-d101d901be50";

const tableBody = document.querySelector(".table__body");

showTable();
//function takes data from api response and returns table of schedule of shows on the page
function showTable() {
  const getShows = axios.get(link + apiKey);
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
