function addingEventListenerToPingButton() {
  document.getElementById("pingBtn").addEventListener("click", function () {
    let url = getUrlForVulnerabilityLevel();
    doGetAjaxCall(
      pingUtilityCallback,
      url + "?ipaddress=" + document.getElementById("ipaddress").value,
      true
    );
  });
}
addingEventListenerToPingButton();

function pingUtilityCallback(data) {
  // Use textContent to avoid interpreting untrusted data as HTML and prevent XSS
  document.getElementById("pingUtilityResponse").textContent = data.content;
}
