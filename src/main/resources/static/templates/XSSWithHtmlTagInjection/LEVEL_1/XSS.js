function addingEventListenerToLoadImageButton() {
  document.getElementById("submit").addEventListener("click", function () {
    let url = getUrlForVulnerabilityLevel();
    doGetAjaxCall(
      appendResponseCallback,
      url + "?value=" + document.getElementById("textInput").value,
      false
    );
  });
}
addingEventListenerToLoadImageButton();

function appendResponseCallback(data) {
  var parentContainer = document.getElementById("parentContainer");
  parentContainer.textContent = '';
  var child = document.createElement('div');
  child.textContent = data;
  parentContainer.appendChild(child);
  if (parentContainer.childNodes.length > 0) {
    parentContainer.childNodes[0].classList.add(
      document.getElementById("fonts").value
    );
  }
}
