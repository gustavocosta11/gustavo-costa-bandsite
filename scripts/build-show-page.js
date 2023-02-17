const shows = [
  {
    date: "Mon Sept 06 2021",

    venue: "Ronald Lane",

    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",

    venue: "Pier 3 East",

    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",

    venue: "View Lounge",

    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",

    venue: "Hyatt Agency",

    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",

    venue: "Moscow Center",

    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",

    venue: "Press Club",

    location: "San Francisco, CA",
  },
];

const show = document.querySelector(".shows");

for (let j = 0; j < shows.length; j++) {
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");

  const dateTitle = document.createElement("h4");
  dateTitle.classList.add("shows__header");
  dateTitle.innerText = "DATE";

  const showDate = document.createElement("p");
  showDate.innerText = shows[j].date;

  const showVenue = document.createElement("h4");
  showVenue.classList.add("shows__header");
  showVenue.innerText = "VENUE";

  const venueTitle = document.createElement("p");
  venueTitle.innerText = shows[j].venue;

  const showLocation = document.createElement("h4");
  showLocation.classList.add("shows__header");
  showLocation.innerText = "LOCATION";

  const locationTitle = document.createElement("p");
  locationTitle.innerText = shows[j].location;

  const showButton = document.createElement("button");
  showButton.innerText = "BUY TICKETS";

  showButton.classList.add("shows__btn");

  showsContainer.appendChild(dateTitle);
  showsContainer.appendChild(showVenue);
  dateTitle.appendChild(showDate);
  showVenue.appendChild(venueTitle);
  showsContainer.appendChild(showLocation);
  showLocation.appendChild(locationTitle);
  showsContainer.appendChild(showButton);

  show.appendChild(showsContainer);
}
