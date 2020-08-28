window.addEventListener("load", loadVersion);
window.addEventListener("load", metaComment);

function loadVersion() {
  fetch("manifest.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let versionUI = document.getElementById("version");
      versionUI.innerHTML = `
      Version: ${data.version}
      `;
      let contentUI = document.querySelector(".modal-content p");
      contentUI.innerHTML = `
      Status: 200
      `;
    })
    .catch(() => {
      let versionUI = document.getElementById("version");
      versionUI.innerHTML = `
      JSON file not found.
      `;
      let contentUI = document.querySelector(".modal-content p");
      contentUI.innerHTML = `
      Status: 404
      `;
    });
}

function metaComment() {
  fetch("metacomments.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // Grab random index in json file array.
      let commentIndex = Math.floor(Math.random() * Math.floor(data.length));
      console.log(data[commentIndex]);
    });
}
