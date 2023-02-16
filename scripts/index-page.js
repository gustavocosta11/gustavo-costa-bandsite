const commentsArr = [
  {
    name: "Connor Walton",
    posted: 1613608320000,
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    posted: 1610238720000,
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    posted: 1608510720000,
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentSection = document.querySelector(".comment__section");

const myForm = document.getElementById("form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  commentSection.innerHTML = "";

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment__textarea.value,
    date: Date.now(),
  };
  console.log(newComment);
  commentsArr.push(newComment);
  myForm.reset();

  allComments();
  // //   newComment();
});

function allComments() {
  commentSection.innerHTML = "";
  for (let i = 0; i < commentsArr.length; i++) {
    const commentArticle = document.createElement("article");

    commentArticle.classList.add("comment__container");

    const commentImg = document.createElement("img");

    commentImg.classList.add("comment__img");

    commentImg.setAttribute("src", "assets/images/Default_pfp.svg.png");

    const commentContainer = document.createElement("div");

    commentContainer.classList.add("comment__profile__container");

    const profileHeader = document.createElement("div");
    profileHeader.classList.add("comment__profile__header");

    const userName = document.createElement("h4");

    userName.innerText = commentsArr[i].name;

    const postedElement = document.createElement("p");
    postedElement.innerText = new Date(
      commentsArr[i].posted
    ).toLocaleDateString();

    const userComments = document.createElement("p");
    userComments.innerText = commentsArr[i].comment;

    commentArticle.appendChild(commentImg);
    commentArticle.appendChild(commentContainer);
    commentContainer.appendChild(profileHeader);
    profileHeader.appendChild(userName);
    profileHeader.appendChild(postedElement);
    commentContainer.appendChild(userComments);

    commentSection.appendChild(commentArticle);
  }
}

// const myForm = document.getElementById("form");

// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   commentSection.innerHTML = "";

//   const newComment = {
//     name: event.target.name.value,
//     comment: event.target.comment__textarea.value,
//     date: Date.now(),
//   };
//   console.log(newComment);
//   commentsArr.push(newComment);
//   myForm.reset();

//   allComments();
//   // //   newComment();
// });
allComments();

// const myForm = document.getElementById("comment__form");
// myForm.addEventListener("submit", afterSubmit);
// function afterSubmit(e) {
//   e.preventDefault();
//   document.getElementById("comments__section").innerHTML = "";
//   let nameValue = document.getElementById("name").value;
//   let commentValue = document.getElementById("comment").value;
//   //creating an object for a new comment
//   let newComment = {
//     name: nameValue,
//     comment: commentValue,
//   };

//   commentsArr.push(newComment);
//   myForm.reset();
// }
