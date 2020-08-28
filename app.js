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
    })
    .catch(() => {
      let contentUI = document.querySelector(".modal-content");
      contentUI.innerHTML = `<p>
      Status: 404 - Please don't read my source code...
      </p>`;
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
