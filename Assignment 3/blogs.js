const main = document.getElementById("main");
const nav = document.querySelectorAll(".nav-item");
const science = document.querySelector(".science");
const cricket = document.querySelector(".cricket");
const tech = document.querySelector(".tech");
const travel = document.querySelector(".travel");
const main2 = document.getElementById("main2");
const main1 = document.getElementById("main1");
const titleDOM = document.querySelector(".title");
const dateDOM = document.querySelector(".date");
const descriptionDOM = document.getElementById("description");
const contentDOM = document.getElementById("content");
const aboutAuthorDOM = document.getElementById("aboutAuthor");

const RecentPostId = document.getElementById("recentposts");
const BlogPost = (Post) => {
  console.log(Post);
  const Month = Post.date.split("-")[1];
  const Day = Post.date.split("-")[0];
  const Year = Post.date.split("-")[2];
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
  titleDOM.innerHTML = `${Post.title}`;
  //   authorJson.innerText = `${author}`;
  descriptionDOM.innerText = `${description}`;
  contentDOM.innerText = `${content}`;
  aboutAuthorDOM.innerText = `${aboutAuthor}`;

  // END
};
const blogsPreview = (str) => {
  console.log(main);

  const fetchData = async () => {
    const data = await fetch("data.json");
    const res = await data.json();
    if (str == "firstLoad") {
      TravelBlogs(res.blogs);
    }
    if (str == "Tech") {
      console.log(res);
      TechBlogs(res.blogs);
    }
    if (str == "Science") {
      ScienceBlogs(res.blogs);
    }
    if (str == "Travel") {
      TravelBlogs(res.blogs);
    }
    if (str == "Cricket") {
      CricketBlogs(res.blogs);
    }
  };
  fetchData();
};
blogsPreview("firstLoad");

const TechBlogs = (res) => {
  const elementsWithActiveClass = document.querySelectorAll(".active");

  elementsWithActiveClass.forEach((element) => {
    element.classList.remove("active");
  });
  tech.classList.add("active");
  main.innerHTML = ``;
  res.map((response) => {
    if (response.category === "Technology") {
      console.log(response.posts);
      response.posts.map((res2) => {
        main.innerHTML += `
            <div
                class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
              >
                <div class="col-lg-6 px-0">
                  <h1 class="display-4 fst-italic title">
                    ${res2.title}
                  </h1>
                  <p class="lead my-3 description">
                    ${res2.description}
                  </p>
                  <p class="lead mb-0">
                    <a href="#" class="text-body-emphasis fw-bold" onclick="helloWOrld('Technology',${res2.id})"
                      >Continue reading...</a
                    >
                  </p>
                </div>
                <div class="col-auto d-none d-lg-block" style="padding:0">
              
                 <img src="${res2.img}"   width="350"
                 height="350"/>
                </div>
              </div> 
            `;
      });
    }
  });
};

const CricketBlogs = (res) => {
  const elementsWithActiveClass = document.querySelectorAll(".active");

  elementsWithActiveClass.forEach((element) => {
    element.classList.remove("active");
  });
  cricket.classList.add("active");
  main.innerHTML = ``;
  res.map((response) => {
    if (response.category === "World") {
      console.log(response.posts);
      response.posts.map((res2) => {
        main.innerHTML += `
            <div
                class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
              >
                <div class="col-lg-6 px-0">
                  <h1 class="display-4 fst-italic title">
                    ${res2.title}
                  </h1>
                  <p class="lead my-3 description">
                    ${res2.description}
                  </p>
                  <p class="lead mb-0">
                    <a href="#" class="text-body-emphasis fw-bold" onclick="helloWOrld('World',${res2.id})"
                      >Continue reading...</a
                    >
                  </p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src="${res2.img}"   width="350"
                height="350"/>
                </div>
              </div>
            `;
      });
    }
  });
};

const ScienceBlogs = (res) => {
  const elementsWithActiveClass = document.querySelectorAll(".active");

  elementsWithActiveClass.forEach((element) => {
    element.classList.remove("active");
  });
  science.classList.add("active");
  main.innerHTML = ``;
  res.map((response) => {
    if (response.category === "Science") {
      console.log(response.posts);
      response.posts.map((res2) => {
        main.innerHTML += `
            <div
                class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
              >
                <div class="col-lg-6 px-0">
                  <h1 class="display-4 fst-italic title">
                    ${res2.title}
                  </h1>
                  <p class="lead my-3 description">
                    ${res2.description}
                  </p>
                  <p class="lead mb-0">
                    <a href="#" class="text-body-emphasis fw-bold" onclick="helloWOrld('Science',${res2.id})"
                      >Continue reading...</a
                    >
                  </p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src="${res2.img}"   width="350"
                height="350"/>
                </div>
              </div> 
            `;
      });
    }
  });
};

const TravelBlogs = (res) => {
  const elementsWithActiveClass = document.querySelectorAll(".active");

  elementsWithActiveClass.forEach((element) => {
    element.classList.remove("active");
  });
  travel.classList.add("active");
  main.innerHTML = ``;
  res.map((response) => {
    if (response.category === "Travel") {
      console.log(response.posts);
      response.posts.map((res2) => {
        main.innerHTML += `
            <div
                class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
              >
                <div class="col-lg-6 px-0">
                  <h1 class="display-4 fst-italic title">
                    ${res2.title}
                  </h1>
                  <p class="lead my-3 description">
                    ${res2.description}
                  </p>
                  <p class="lead mb-0">
                    <a href="#" class="text-body-emphasis fw-bold" onclick="helloWOrld('Travel',${res2.id})"
                      >Continue reading...</a
                    >
                  </p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src="${res2.img}"   width="350"
                height="350"/>
                </div>
              </div> 
            `;
      });
    }
  });
};

const helloWOrld = async (category, id) => {
  const data = await fetch("data.json");
  const res = await data.json();
  console.log(category, id);
  // QUERY SELECTORS
  res.blogs.map((blog) => {
    if (blog.category == category) {
      const filteredPost = blog.posts.find((post) => post.id == id);
      console.log(filteredPost);
      main2.classList.remove("hidden");
      main1.classList.add("hidden");
      BlogPost(filteredPost);
      console.log(blog.posts);
      RecentPostId.innerHTML = ``;
      blog.posts.map((blogs) => {
        console.log(blogs);
        if (blogs.id !== filteredPost.id) {
          RecentPostId.innerHTML += `
    <ul class="list-unstyled">
    <li>
      <a
        class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
        href="#"
      >
      <img src="${blogs.img}"   width="150"
      height="150"/>
        <div class="col-lg-8">
          <h6 class="mb-0">${blogs.title}</h6>
          <small class="text-body-secondary"
            >${blogs.date}</small
          >
        </div>
      </a>
    </li>
    
  </ul>
    `;
        }
      });
    }
  });
  // END
};

const toggleBlogSeperateAndBlogs = () => {
  main1.classList.remove("hidden");
  main2.classList.add("hidden");
};
