// const commentsArr = [
//   {
//     name: "Connor Walton",
//     posted: 1613608320000,
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     posted: 1610238720000,
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     posted: 1608510720000,
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

// const commentSection = document.querySelector(".comment__section");

// const myForm = document.getElementById("form");

// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newComment = {
//     name: event.target.name.value,
//     comment: event.target.comment__textarea.value,
//     posted: Date.now(),
//   };

//   //   console.log(newComment);
//   commentsArr.push(newComment);
//   //   commentsArr.unshift(newComment);
//   myForm.reset();

//   allComments();
// });

// function allComments() {
//   commentsArr.sort((a, b) => {
//     return b.posted - a.posted;
//   });
//   commentSection.innerHTML = "";
//   for (let i = 0; i < commentsArr.length; i++) {
//     const commentArticle = document.createElement("article");

//     commentArticle.classList.add("comment__container");

//     const commentImg = document.createElement("img");

//     commentImg.classList.add("comment__img");

//     commentImg.setAttribute("src", "assets/images/Default_pfp.svg.png");

//     const commentContainer = document.createElement("div");

//     commentContainer.classList.add("comment__profile__container");

//     const profileHeader = document.createElement("div");
//     profileHeader.classList.add("comment__profile__header");

//     const userName = document.createElement("h4");

//     userName.innerText = commentsArr[i].name;

//     const postedElement = document.createElement("p");
//     postedElement.innerText = new Date(
//       commentsArr[i].posted
//     ).toLocaleDateString();

//     const userComments = document.createElement("p");
//     userComments.innerText = commentsArr[i].comment;

//     commentArticle.appendChild(commentImg);
//     commentArticle.appendChild(commentContainer);
//     commentContainer.appendChild(profileHeader);
//     profileHeader.appendChild(userName);
//     profileHeader.appendChild(postedElement);
//     commentContainer.appendChild(userComments);
//     commentSection.appendChild(commentArticle);
//   }
// }

// allComments();

// const form = document.querySelector("#form");
// const input = document.querySelector("#name");
// const comment = document.querySelector("#comment");

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

const link = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=b70c7207-fea6-4ea5-98db-d101d901be50";
//function takes in comment data and return html card with format
function displayComment(comment) {
  const commentLi = document.createElement("li");
  commentLi.classList.add("item");
  commentsList.appendChild(commentLi);

  const itemImg = document.createElement("img");
  itemImg.classList.add("item__img");
  itemImg.setAttribute("src", " ");
  commentLi.appendChild(itemImg);

  const itemSection = document.createElement("div");
  itemSection.classList.add("item__section");
  commentLi.appendChild(itemSection);

  const itemHeader = document.createElement("div");
  itemHeader.classList.add("item__title");
  itemSection.appendChild(itemHeader);

  const itemName = document.createElement("p");
  itemName.classList.add("item__name");
  itemName.innerHTML = comment.name;
  itemHeader.appendChild(itemName);

  const itemDate = document.createElement("p");
  itemDate.classList.add("item__date");
  itemDate.innerText = new Date(comment.timestamp).toLocaleDateString("en-US");
  itemHeader.appendChild(itemDate);

  const itemBody = document.createElement("div");
  itemBody.classList.add("item__body");
  itemSection.appendChild(itemBody);

  const bodyCopy = document.createElement("p");
  bodyCopy.innerText = comment.comment;
  itemBody.appendChild(bodyCopy);

  const itemFooter = document.createElement("div");
  itemFooter.classList.add("item__footer");
  itemSection.appendChild(itemFooter);

  const likeImgLink = document.createElement("a");
  likeImgLink.classList.add("item__actions", "item__actions--like");
  likeImgLink.setAttribute("data-id", comment.id);
  // likeImgLink.setAttribute("onclick", "liked(this)");
  likeImgLink.setAttribute("value", "like");
  itemFooter.appendChild(likeImgLink);

  const likeImg = document.createElement("img");
  likeImg.classList.add("like-img");
  likeImg.setAttribute("src", "./assets/icons/SVG/icon-like.svg");
  likeImg.setAttribute("data-id", comment.id);
  likeImg.setAttribute("value", "like");
  likeImgLink.appendChild(likeImg);

  const likeCounter = document.createElement("p");
  likeImg.classList.add("like-counter");
  likeCounter.innerText = comment.likes;
  likeImgLink.appendChild(likeCounter);

  const deleteLink = document.createElement("a");
  deleteLink.classList.add("item__actions", "item__actions--delete");
  deleteLink.setAttribute("data-id", comment.id);
  deleteLink.innerText = "Delete";
  // deleteLink.setAttribute("onclick", "deleteComment(this)");
  deleteLink.setAttribute("value", "delete");
  itemFooter.appendChild(deleteLink);
}
//function returns comments card list from api response data
function showCommentsList() {
  const getComments = axios.get(link + apiKey);
  getComments.then((response) => {
    const commentsData = response.data;
    const commentsArray = commentsData.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    commentsList.innerHTML = "";
    commentsArray.forEach((comment) => {
      displayComment(comment);
    });
  });
}

const form = document.querySelector(".form");
const commentsList = document.querySelector(".comments__list");
showCommentsList();
//add comment once the submit button is clicked
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const submittedName = event.target.formName;
  const submittedComment = event.target.formComment;
  if (formValidation(submittedName, submittedComment)) {
    const postedComment = {
      name: submittedName.value,
      comment: submittedComment.value,
    };
    const addComment = axios.post(link + apiKey, postedComment);
    addComment.then((response) => {
      event.target.reset();
      showCommentsList(response);
    });
  }
});

// listens for clicks on comment like and delete button of a comment and takes action accordingly
const itemActions = document.querySelector(".comments__list");

itemActions.addEventListener("click", (event) => {
  if (event.target.getAttribute("data-id")) {
    const userId = event.target.getAttribute("data-id");
    if (event.target.getAttribute("value") === "like") {
      const addLike = axios.put(link + "/" + userId + "/like" + apiKey);
      addLike.then((response) => {
        showCommentsList(response);
      });
    } else {
      const delComment = axios.delete(link + "/" + userId + apiKey);
      delComment.then((response) => {
        showCommentsList(response);
      });
    }
  }
});

//function check if the text added in the field is valid characters
function formValidation(nameField, commentField) {
  const valid = /^[a-zA-Z]/;
  if (!valid.test(nameField.value)) {
    nameField.focus();
    nameField.value = "";
    nameField.classList.add("form__input--error");
    return false;
  } else if (!valid.test(commentField.value)) {
    commentField.focus();
    commentField.value = "";
    commentField.classList.add("form__input--error");
    return false;
  } else {
    return true;
  }
}
