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

const FeaturedBlogs = document.getElementById("blogs");
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
        <div class="col-md-6 w-100">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static ">
            <strong class="d-inline-block mb-2 text-primary-emphasis">Technology</strong>
            <h3 class="mb-2"> ${res2.title}</h3>
            <div class="mb-2 text-body-secondary">${res2.date}</div>
            <p class="card-text mb-3"> ${res2.description}</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link" onclick="helloWOrld('Technology',${res2.id})">
              Continue reading
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="col-auto d-none d-lg-block w-40" style=" width:30%; background-image: url(${res2.img}); background-size:cover" >
            
          </div>
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
        <div class="col-md-6 w-100">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static ">
            <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
            <h3 class="mb-2"> ${res2.title}</h3>
            <div class="mb-2 text-body-secondary">${res2.date}</div>
            <p class="card-text mb-3"> ${res2.description}</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link" onclick="helloWOrld('World',${res2.id})">
              Continue reading
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="col-auto d-none d-lg-block w-40" style=" width:30%; background-image: url(${res2.img}); background-size:cover" >
            
          </div>
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
        <div class="col-md-6 w-100">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static ">
            <strong class="d-inline-block mb-2 text-primary-emphasis">Science</strong>
            <h3 class="mb-2"> ${res2.title}</h3>
            <div class="mb-2 text-body-secondary">${res2.date}</div>
            <p class="card-text mb-3"> ${res2.description}</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link" onclick="helloWOrld('Science',${res2.id})">
              Continue reading
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="col-auto d-none d-lg-block w-40" style=" width:30%; background-image: url(${res2.img}); background-size:cover" >
            
          </div>
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
        <div class="col-md-6 w-100">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static ">
            <strong class="d-inline-block mb-2 text-primary-emphasis">Travel</strong>
            <h3 class="mb-2"> ${res2.title}</h3>
            <div class="mb-2 text-body-secondary">${res2.date}</div>
            <p class="card-text mb-3"> ${res2.description}</p>
            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link" onclick="helloWOrld('Travel',${res2.id})">
              Continue reading
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="col-auto d-none d-lg-block w-40" style=" width:30%; background-image: url(${res2.img}); background-size:cover" >
            
          </div>
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

const RenderFeaturedBlogs = () => {};
const toggleBlogSeperateAndBlogs = () => {
  main1.classList.remove("hidden");
  main2.classList.add("hidden");
};
