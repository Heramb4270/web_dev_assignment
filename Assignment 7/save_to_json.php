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

    echo $blogTitle . $blogContent . $category;

}


?>