function disable_subsequent_click() {
  var sign_in_button = document.getElementById("sign_in");
  if (sign_in_button != null) {
    setTimeout("sign_in_button.disabled = false;", 60000);
    sign_in_button.disabled = true;
  }

  return true;
}

function update_form_action_from_headers(form) {
  disable_subsequent_click();
  var _request = new XMLHttpRequest();
  var url =
    "https://n432.network-auth.com/splash/login?continue_url=CONTINUE_URL_PLACEHOLDER";
  _request.open("HEAD", window.location, true);
  _request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  _request.onreadystatechange = function () {
    if (_request.readyState === 4) {
      var continue_url = _request.getResponseHeader("Continue-Url");
      form.action = url.replace("CONTINUE_URL_PLACEHOLDER", continue_url);
      form.submit();
    }
  };
  _request.send(null);
  return false;
}

// const checkbox = document.querySelector("#checkBox");

// let checked = false;
// checkbox.addEventListener("click", function () {
//   const button = document.querySelector(".button");
//   checked = !checked;
//   if (checked) {
//     button.classList.remove("disabled");
//     button.style.pointerEvents = "all";
//   } else {
//     button.classList.add("disabled");
//     button.style.pointerEvents = "none";
//   }
// });
