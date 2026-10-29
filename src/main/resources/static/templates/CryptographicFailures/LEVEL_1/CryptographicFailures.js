function loadChallenge() {
  let url = getUrlForVulnerabilityLevel();
  doGetAjaxCall(displayChallenge, url, true);
}

function displayChallenge(data) {
  let challengeDiv = document.getElementById("challenge");
  challengeDiv.textContent = "";
  const strongEl = document.createElement("strong");
  strongEl.textContent = data.content;
  challengeDiv.appendChild(strongEl);
  if (data.isValid) {
    challengeDiv.className = "challenge-secure";
  } else {
    challengeDiv.className = "challenge-vulnerable";
  }
}

function addingEventListenerToSubmitButton() {
  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      let url = getUrlForVulnerabilityLevel();
      let password = document.getElementById("password").value;

      if (!password) {
        let resultDiv = document.getElementById("result");
        resultDiv.textContent = "";
        const strongMsg = document.createElement("strong");
        strongMsg.textContent = "Please enter a password guess.";
        resultDiv.appendChild(strongMsg);
        resultDiv.style.color = "red";
        return;
      }

      let params = new URLSearchParams();
      params.append("password", password);

      doGetAjaxCall(
        appendResponseCallback,
        url + "?" + params.toString(),
        true
      );
    });
}

function appendResponseCallback(data) {
  let resultDiv = document.getElementById("result");
  if (data.isValid) {
    resultDiv.textContent = "";
    const strongRes = document.createElement("strong");
    strongRes.textContent = "Result:";
    resultDiv.appendChild(strongRes);
    resultDiv.appendChild(document.createTextNode(" " + data.content));
    resultDiv.className = "result-success";
  } else {
    resultDiv.textContent = "";
    const strongRes = document.createElement("strong");
    strongRes.textContent = "Result:";
    resultDiv.appendChild(strongRes);
    resultDiv.appendChild(document.createTextNode(" " + data.content));
    resultDiv.className = "result-failure";
  }
}

addingEventListenerToSubmitButton();
loadChallenge();
