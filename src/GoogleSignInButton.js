import React, { useEffect } from "react";

function GoogleSignInButton({ clientId, loginUri }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
        theme: "outline",
        size: "large",
      });

      window.google.accounts.id.prompt();
    };

    function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
    }
  }, [clientId]);

  return <div id="buttonDiv" />;
}
