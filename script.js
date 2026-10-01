// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ===============================
// CLOSE MOBILE MENU
// WHEN LINK IS CLICKED
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// ===============================
// BOOKING FORM
// ===============================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value;


    // Simple validation

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }


    // Display confirmation

    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your booking enquiry has been received.\n" +
        "We will contact you shortly."
    );


    // Clear form

    bookingForm.reset();

});


// ===============================
// PREVENT PAST BOOKING DATES
// ===============================

const dateInput =
    document.getElementById("date");


const today =
    new Date().toISOString().split("T")[0];


dateInput.setAttribute("min", today);
