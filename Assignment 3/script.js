const titleDOM = document.querySelector(".title");
const dateDOM = document.querySelector(".date");
const descriptionDOM = document.getElementById("description");
const contentDOM = document.getElementById("content");
const aboutAuthorDOM = document.getElementById("aboutAuthor");

const BlogPost = async (Post) => {
  const Month = Post.date.split("-")[1];
  const Day = Post.split("-")[0];
  const Year = Post.split("-")[2];
  const author = Post.author;
  const description = Post.description;
  const content = Post.content;
  const aboutAuthor = Post.about_author;
  console.log(Month, Day, Year, author, description, descriptionDOM, content);

  let Month2;
  switch (Month) {
    case "01":
      Month2 = "January";
      break;
    case "02":
      Month2 = "February";

      break;
    case "03":
      Month2 = "March";

      break;
    case "04":
      Month2 = "April";

      break;
    case "05":
      Month2 = "May";

      break;
    case "06":
      Month2 = "June";

      break;
    case "07":
      Month2 = "July";

      break;
    case "08":
      Month2 = "August";

      break;
    case "09":
      Month2 = "September";

      break;
    case "10":
      Month2 = "October";

      break;
    case "11":
      Month2 = "November";

      break;
    case "12":
      Month2 = "December";

      break;
    default:
      break;
  }
  dateDOM.innerText = `${Month2} ${Day}, ${Year} by ${author}`;
  titleDOM.innerHTML = `<h3>${res.blogs[0].posts[0].title} </h3>`;
  //   authorJson.innerText = `${author}`;
  descriptionDOM.innerText = `${description}`;
  contentDOM.innerText = `${content}`;
  aboutAuthorDOM.innerText = `${aboutAuthor}`;
  console.log(title);

  // END
};
