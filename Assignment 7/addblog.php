<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add Blog</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <?php 

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $blogTitle = $_POST["blogTitle"];
    $blogContent = $_POST["blogContent"];
    $category = $_POST["category"];
    $blogImage = $_FILES["blogImage"];

    $fileName = $blogImage['name'];
    $fileTmpName = $blogImage['tmp_name'];

    $targetDirectory = "./images/"; // Specify your directory here
    $targetFilePath = $targetDirectory . $fileName;
    move_uploaded_file($fileTmpName, $targetFilePath);

    // echo $blogTitle . $blogContent . $category;

}


?>
    <style>
      body {
        font-family: "Montserrat", sans-serif;
        background-color: #f8f9fa;
      }
      .container2 {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      h1 {
        color: #007bff;
      }
      .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
      }
      .btn-primary:hover {
        background-color: #0069d9;
        border-color: #0062cc;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      >
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none"
            previewlistener="true"
          >
            <svg
              class="bi"
              width="40"
              height="32"
              role="img"
              device-width
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="/blogs.html" class="nav-link px-2">Blog</a></li>

          <li><a href="/addblog.html" class="nav-link px-2">Add Blog</a></li>
          <li><a href="#" class="nav-link px-2">About</a></li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </div>
    <div class="container container2" style="margin-top: 20px">
      <h1 class="text-center mb-4">Add Blog</h1>
      <form action="" method="post">
        <div class="form-group">
          <label for="blogTitle">Blog Title</label>
          <input
            type="text"
            class="form-control"
            id="blogTitle"
            name="blogTitle"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div class="form-group">
          <label for="blogContent">Blog Content</label>
          <textarea
            class="form-control"
            id="blogContent"
            name="blogContent"
            rows="5"
            placeholder="Enter blog content"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="category" name="category">Category</label>
          <select class="form-control" id="category" required>
            <option value="">Select a category</option>
            <option value="Travel">Travel</option>
            <option value="Technology">Technology</option>
            <option value="World">World</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div class="form-group">
          <label for="blogImage">Blog Image</label>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="blogImage"
              name="blogImage"
              accept="image/*"
              required
            />
            <label class="custom-file-label" for="blogImage"
              >Choose image</label
            >
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <script>
      // Add Bootstrap's file input functionality
      $(".custom-file-input").on("change", function () {
        let fileName = $(this).val().split("\\").pop();
        $(this).next(".custom-file-label").addClass("selected").html(fileName);
      });
    </script>
  </body>
</html>
