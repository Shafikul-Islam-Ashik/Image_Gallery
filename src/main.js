//get elements
const imageInput = document.querySelector("#imageInput");
const imageGallery = document.querySelector("#gallery");
const msg = document.querySelector(".msg");

/**
 * onchange file input
 */
imageInput.addEventListener("change", (e) => {
  const files = e.target.files;

  // loop through the selected image
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // validate file type (allow only image files)
    if (!file.type.startsWith("image/")) {
      msg.innerHTML = alertMsg(
        "Invalid file format. Please select an image file"
      );
      continue;
    } else {
      msg.innerHTML = "";
    }

    // validate file size (allow files upto 3 MB)
    const maxSize = 3 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      msg.innerHTML = alertMsg(
        "File size exceeds the limit. Please select a smaller file (max: 3MB)"
      );
      continue;
    } else {
      msg.innerHTML = "";
    }

    // create new image elemet
    const img = document.createElement("img");

    // set the source of the image to the obfect URL of the file
    const imgSrc = URL.createObjectURL(file);
    img.src = imgSrc;

    // create element
    const div = document.createElement("div");
    const span = document.createElement("span");
    // span.appendChild(document.createTextNode(delete));
    span.innerHTML = `&times;`;

    // append img and span into div
    div.appendChild(img);
    div.appendChild(span);

    // append the div to the gallery div
    imageGallery.appendChild(div);

    // delete img
    span.onclick = (e) => {
      imageGallery.removeChild(e.target.parentElement);
    };
  }
});
