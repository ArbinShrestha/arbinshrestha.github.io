// contact.js
fetch("env.json")
  .then((res) => res.json())
  .then((env) => {
    emailjs.init(env.YOUR_PUBLIC_KEY);
    console.log("EmailJS initialized with public key:", env.YOUR_PUBLIC_KEY);
    
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(env.YOUR_SERVICE_ID, env.YOUR_TEMPLATE_ID, this).then(
          function () {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
          },
          function (error) {
            alert(
              "Failed to send message. Please try again.\\n" +
                JSON.stringify(error)
                
            );
          }
        );
      });
  })
  .catch((err) => {
    console.error("Failed to load env.json:", err);
  });


