// =================================
// ROYAL BITES WEBSITE
// =================================


// RESTAURANT WHATSAPP NUMBER

// Replace this demo number with the
// real restaurant WhatsApp number.
// Format: 91 + 10 digit mobile number.

const restaurantNumber = "919876543210";


// =================================
// FOOD ORDER SYSTEM
// =================================

function orderFood(foodName, price) {

    const message =
        "Hello Royal Bites! I want to order:%0A%0A" +
        "Food: " + encodeURIComponent(foodName) + "%0A" +
        "Price: Rs. " + price;

    const whatsappURL =
        "https://wa.me/" +
        restaurantNumber +
        "?text=" + message;

    window.open(whatsappURL, "_blank");

}


// =================================
// TABLE BOOKING SYSTEM
// =================================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const date =
        document.getElementById("bookingDate").value;

    const time =
        document.getElementById("bookingTime").value;

    const guests =
        document.getElementById("guests").value;


    // Validate phone

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10 digit phone number.");

        return;

    }


    // Create booking message

    const message =
        "Hello Royal Bites! I want to book a table.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Date: " + encodeURIComponent(date) + "%0A" +
        "Time: " + encodeURIComponent(time) + "%0A" +
        "Guests: " + encodeURIComponent(guests);


    // Open WhatsApp

    const whatsappURL =
        "https://wa.me/" +
        restaurantNumber +
        "?text=" + message;

    window.open(whatsappURL, "_blank");

});


// =================================
// PREVENT PAST BOOKING DATES
// =================================

const dateInput = document.getElementById("bookingDate");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const todayDate = year + "-" + month + "-" + day;

dateInput.min = todayDate;


// =================================
// SCROLL ANIMATION
// =================================

const animatedElements = document.querySelectorAll(
    ".hero-content, .features, .food-card, .about, .gallery, .review-card, .booking, .contact"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


animatedElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// =================================
// CONSOLE MESSAGE
// =================================

console.log("Royal Bites Website Loaded Successfully!");