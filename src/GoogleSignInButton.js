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

  //   function handleCredentialResponse(response) {
  //     console.log("Encoded JWT ID token: " + response.credential);
  //   }
  // }, [clientId]);
  function handleCredentialResponse(response) {
    const credential = response.credential;
    console.log("Encoded JWT ID token: " + credential);
  
    // Redirect the user to your application
    window.location.href = "/callback?credential=" + encodeURIComponent(credential);
  }

  return <div id="buttonDiv" />;
}
export default GoogleSignInButton;
