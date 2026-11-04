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
    let content = JSON.parse(data.content);
    const container = document.getElementById("Information");
    // Clear existing content
    while (container.firstChild) container.removeChild(container.firstChild);

    const table = document.createElement("table");
    table.id = "InfoTable";

    // Build header row if content has entries
    if (content.length > 0) {
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      for (let key in content[0]) {
        const th = document.createElement("th");
        th.id = "InfoColumn";
        th.textContent = key;
        headerRow.appendChild(th);
      }
      thead.appendChild(headerRow);
      table.appendChild(thead);
    }

    const tbody = document.createElement("tbody");
    for (let index in content) {
      const row = document.createElement("tr");
      row.id = "Info";
      for (let key in content[index]) {
        const td = document.createElement("td");
        td.id = "InfoColumn";
        // Use textContent to avoid interpreting HTML from untrusted data
        td.textContent = content[index][key];
        row.appendChild(td);
      }
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    container.appendChild(table);
  } else {
    const container = document.getElementById("Information");
    // Use textContent to avoid interpreting HTML
    container.textContent = "Unable to Load Users";
  }
}
