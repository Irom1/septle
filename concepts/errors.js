window.sendError = function(msg) {
  window.mess = msg;
  console.warn(msg);
  if(msg.error) {
    msg = msg.error;
    msg["filename"] = msg["fileName"];
  }
  let error = {
    system: {
      "url": location.href,
      "userAgent": navigator.userAgent
    },
    details: {
      file: msg["filename"],
      message: msg["message"],
      stack: msg["stack"]
    }
  };
  if(error["details"]["file"].includes("arc")) {
    //return;
  }
  error = JSON.stringify(error,null,2);
  fetch("https://docs.google.com/forms/d/e/1FAIpQLSdtDn_Uk34OlAiKhwLxR8Cm2tT_PCj-ngJTelADDwkHUoqLiQ/formResponse", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    method: 'POST',
    body: "entry.2112351635=" + encodeURIComponent(error)
  });
};

window.addEventListener("error",window.sendError);
