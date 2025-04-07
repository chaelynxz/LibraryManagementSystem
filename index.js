const items = document.querySelectorAll(".menu-item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    menuItems.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to clicked button
    item.classList.add("active");

    // Get the href from data attribute
    const targetPage = item.getAttribute("data-href");

    // Redirect to the page
    window.location.href = targetPage;
  });
});
const books = document.querySelectorAll(".book");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupStatus = document.getElementById("popup-status");
const closeBtn = document.querySelector(".close-btn");
const reserveActions = document.getElementById("reserve-actions");
const reserveBtn = document.getElementById("reserve-btn");
const scheduleBtn = document.getElementById("schedule-btn");
const laterBtn = document.getElementById("later-btn");
const reserveSchedule = document.getElementById("reserve-schedule");
const scheduleMessage = document.getElementById("schedule-message");
const reserveExpiration = document.getElementById("reserve-expiration");

// Helper function to format the expiration date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options); // This formats the date in "April 10, 2025" format
}

books.forEach((book) => {
  book.addEventListener("click", () => {
    const title = book.getAttribute("data-title");
    const status = book.getAttribute("data-status");
    const reservationExpiration = book.getAttribute("data-reservation-expiration"); // Get reservation expiration date

    popupTitle.textContent = title;

    if (status === "available") {
      popupStatus.textContent = "✅ This book is available.";
      reserveBtn.classList.remove("hidden");
      laterBtn.classList.remove("hidden");
      reserveActions.classList.remove("hidden");
      reserveBtn.onclick = () => {
        window.location.href = "reserve.html"; // Redirect to reservation page
      };
      // Hide the schedule button if the book is available
      scheduleBtn.classList.add("hidden");
    } else {
      popupStatus.textContent = "❌ This book is already reserved.";
      reserveBtn.classList.add("hidden");
      laterBtn.classList.add("hidden");
      reserveBtn.onclick = null;
      // Show the schedule button if the book is reserved
      scheduleBtn.classList.remove("hidden");
      scheduleBtn.onclick = () => {
        // Show the reserve schedule and expiration date
        reserveSchedule.classList.remove("hidden");
        scheduleMessage.textContent = "This book will be available on:";

        const formattedExpirationDate = formatDate(reservationExpiration); // Format the date
        reserveExpiration.textContent = formattedExpirationDate; // Display formatted date
      };
    }

    popup.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  reserveSchedule.classList.add("hidden"); // Hide the schedule details when closing the popup
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
    reserveSchedule.classList.add("hidden"); // Hide schedule on background click
  }
});

laterBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  reserveSchedule.classList.add("hidden"); // Hide the schedule details when clicking "Maybe Later"
});