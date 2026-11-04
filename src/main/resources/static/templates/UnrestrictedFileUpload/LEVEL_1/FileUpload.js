function addingEventListenerToUploadImage() {
  document.getElementById("upload").addEventListener("click", function () {
    var form = document.getElementById("file");
    var file = form.files[0];
    var formData = new FormData();
    formData.append("file", file);
    let url = getUrlForVulnerabilityLevel();
    doPostAjaxCall(uploadImage, url, true, formData);
  });
}
addingEventListenerToUploadImage();

function uploadImage(data) {
  // Use textContent to safely insert untrusted text and avoid XSS via innerHTML
  document.getElementById("uploaded_file_info").textContent = data.isValid
    ? "File uploaded at location:" + data.content
    : data.content;
}
