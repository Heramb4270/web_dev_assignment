const express = require("express");
const fs = require("fs");
const path = require("path");
const fsextra = require("fs-extra");

const app = express();
const PORT = process.env.PORT || 8000;
let GlobalFileName = null;
// Serve the HTML file
app.use(express.static(path.join(__dirname, "images")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// File handling endpoints
app.get("/read", (req, res) => {
  if (GlobalFileName !== null) {
    fs.readFile(GlobalFileName + ".txt", "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Error reading file");
      } else {
        res.send(data);
      }
    });
  } else {
    console.log("Error in Reading");
  }
});

app.post("/write", express.json(), (req, res) => {
  const content = req.body.content;
  const fileName = req.body.FileName;
  if (!content) {
    res.status(400).send("Content is required");
    return;
  }

  GlobalFileName = fileName;
  fs.writeFile(fileName + ".txt", content, (err) => {
    if (err) {
      res.status(500).send("Error writing to file");
    } else {
      res.send("File written successfully File Name is " + fileName);
    }
  });
});
app.post("/append", express.json(), (req, res) => {
  if (GlobalFileName !== null) {
    const content = req.body.content;
    if (!content) {
      res.status(400).send("Content is required");
      return;
    }

    fs.appendFile(GlobalFileName + ".txt", content + "\n", (err) => {
      if (err) {
        res.status(500).send("Error appending to file");
      } else {
        res.send("Content appended successfully");
      }
    });
  } else {
    console.log("Error in Appending");
  }
});

app.post("/copy", (req, res) => {
  if (GlobalFileName !== null) {
    fs.copyFile(GlobalFileName + ".txt", GlobalFileName + "copy.txt", (err) => {
      if (err) {
        res.status(500).send("Error copying file");
      } else {
        res.send("File copied successfully");
      }
    });
  } else {
    console.log("Error in Copying");
  }
});

//move file from one directory to another
app.post("/move", (req, res) => {
  if (GlobalFileName !== null) {
    fsextra.move(GlobalFileName + ".txt", "Moved_File/moved.txt", (err) => {
      if (err) {
        res.status(500).send("Error moving file");
      } else {
        res.send("File moved successfully");
      }
    });
  } else {
    console.log("Error in Moving");
  }
});

// Delete file
app.delete("/delete", (req, res) => {
  if (GlobalFileName !== null) {
    fs.unlink(GlobalFileName + ".txt", (err) => {
      if (err) {
        res.status(500).send("Error deleting file");
      } else {
        res.send("File deleted successfully");
      }
    });
  } else {
    console.log("Error in Deleting");
  }
});

// Rename file
app.put("/rename", (req, res) => {
  if (GlobalFileName !== null) {
    fs.rename(GlobalFileName + ".txt", "renamed-example.txt", (err) => {
      if (err) {
        res.status(500).send("Error renaming file");
      } else {
        res.send("File renamed successfully");
      }
    });
  } else {
    console.log("Error in Renaming");
  }
});

// Add other endpoints for append, copy, move, delete, rename as needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
