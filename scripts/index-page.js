const link = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=b70c7207-fea6-4ea5-98db-d101d901be50";

//function that displays the comment and it goes to the comment section
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
  itemDate.innerText = new Date(comment.timestamp).toLocaleDateString();
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

  likeImgLink.setAttribute("value", "like");
  itemFooter.appendChild(likeImgLink);

  const likeBtn = document.createElement("img");
  likeBtn.classList.add("like-img");
  likeBtn.setAttribute("src", "assets/icons/SVG/heart-15.svg");
  likeBtn.setAttribute("data-id", comment.id);
  likeBtn.setAttribute("value", "like");
  likeImgLink.appendChild(likeBtn);

  const likeCounter = document.createElement("p");
  likeBtn.classList.add("like-counter");
  likeCounter.innerText = comment.likes;
  likeImgLink.appendChild(likeCounter);

  const deleteBtn = document.createElement("a");
  deleteBtn.classList.add("item__actions", "item__actions--delete");
  deleteBtn.setAttribute("data-id", comment.id);
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("value", "delete");
  itemFooter.appendChild(deleteBtn);
}
// function that takes the comment from api list(response data) using axios
function showCommentsList() {
  const getComments = axios.get(link + apiKey);
  getComments.then((response) => {
    const commentsData = response.data;
    const commentsArr = commentsData.sort((a, b) => b.timestamp - a.timestamp);
    commentsList.innerHTML = "";
    commentsArr.forEach((comment) => {
      displayComment(comment);
    });
  });
}

// submit button that adds the comment when clicked
const form = document.querySelector(".form");
const commentsList = document.querySelector(".comments__list");
showCommentsList();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const submittedName = event.target.formName;
  const submittedComment = event.target.formComment;
  if ((submittedName, submittedComment)) {
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

// like and delete button section
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
