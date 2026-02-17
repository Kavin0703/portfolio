var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Web Developer" , "Backend Developer"],
    typeSpeed: 90,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});


(function () {
    emailjs.init("8AHZQqmECQM2GhVnf");
})();

window.onload=function() {
    const form = document.querySelector("form");

    form.addEventListener("Submit", function(event) {
        event.preventDefault();

        const templateparams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            title: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

// document.getElementById("contact").addEventListener("submit", function (e) {
//     e.preventDefault();


        emailjs.send("service_w9axzml", "template_bjqfun2", templateparams).then(function(response) {
            alert("Email send successfully!");
            // document.getElementById("contact").reset();
            console.log("SUCCESS!" , response.status, response.text);
        },
        function(error) {
        alert("failed");
        console.error("FAILED...", error);
        });
    });
};