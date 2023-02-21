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

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment__textarea.value,
    posted: Date.now(),
  };

  //   console.log(newComment);
  commentsArr.push(newComment);
  //   commentsArr.unshift(newComment);
  myForm.reset();

  allComments();
});

function allComments() {
  commentsArr.sort((a, b) => {
    return b.posted - a.posted;
  });
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

allComments();

const form = document.querySelector("#form");
const input = document.querySelector("#name");
const comment = document.querySelector("#comment");

// form.addEventListener("submit", submitForm);
// form.addEventListener("input", validateInput);

// function validateInput(e) {
//   let isInvalid = false;
//   const value = e.target.value.trim();
//   switch (e.target.name) {
//     case "name":
//       isInvalid = value === "";
//       break;

//     case "comment":
//       isInvalid = value === "";
//       break;
//   }
//   e.classList.add("invalid", isInvalid);
//   return isInvalid;
// }

// function submitForm(e) {
//   e.preventDefault();

//   const isInvalid =
//     validateInput({ target: input }) | validateInput({ target: comment });

//   if (isInvalid) {
//     //not all fields are valid do something here
//     // style.border = "2px solid red";
//   }
// }

// form.addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   const inputValue = input.value;
//   const commentValue = comment.value;

//   if (inputValue === "") {
//     input.style.border = "2px solid red";
//   }

//   if (commentValue === "") {
//     comment.style.border = "2px solid red";
//   }
// }
