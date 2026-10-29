function addingEventListenerToLoadImageButton() {
  document.getElementById("loadButton").addEventListener("click", function () {
    let url = getUrlForVulnerabilityLevel();
    doGetAjaxCall(
      appendResponseCallback,
      url + "?fileName=" + document.getElementById("fileName").value,
      true
    );
  });
}
addingEventListenerToLoadImageButton();

function appendResponseCallback(data) {
  if (data.isValid) {
    const tableElement = document.createElement("table");
    tableElement.id = "InfoTable";

    const content = JSON.parse(data.content);

    if (content.length > 0) {
      const headerRow = document.createElement("tr");
      for (let key in content[0]) {
        const th = document.createElement("th");
        th.id = "InfoColumn";
        th.textContent = key;
        headerRow.appendChild(th);
      }
      tableElement.appendChild(headerRow);
    }

    for (let index in content) {
      const tr = document.createElement("tr");
      tr.id = "Info";
      for (let key in content[index]) {
        const td = document.createElement("td");
        td.id = "InfoColumn";
        td.textContent = String(content[index][key]);
        tr.appendChild(td);
      }
      tableElement.appendChild(tr);
    }

    const infoEl = document.getElementById("Information");
    while (infoEl.firstChild) {
      infoEl.removeChild(infoEl.firstChild);
    }
    infoEl.appendChild(tableElement);
  } else {
    const infoEl = document.getElementById("Information");
    infoEl.textContent = "Unable to Load Users";
  }
}
