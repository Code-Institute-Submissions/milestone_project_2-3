function sendMail(contactForm) {
    emailjs.send("gmail", "repair_shop", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "repair_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}