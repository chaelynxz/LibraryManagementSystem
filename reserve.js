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
    menuItems.forEach((btn) => btn.classList.remove("active"));
    item.classList.add("active");
    const targetPage = item.getAttribute("data-href");
    window.location.href = targetPage;
  });
});

const successMessageDiv = document.getElementById("successMessage");

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const bookTitle = document.getElementById('book-title').value;
  const memberId = document.getElementById('member-id').value;
  const reservationDate = formatDate(document.getElementById('reservation-date').value);
  successMessageDiv.textContent = `Your reservation for "${bookTitle}" under Membership ID: ${memberId} is successful! Reserved date: ${reservationDate}.`;
  successMessageDiv.style.display = 'block';
  this.reset();
});

document.getElementById('holdForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const holdTitle = document.getElementById('hold-title').value;
  const memberId = document.getElementById('member-id-hold').value;
  const holdPeriod = document.getElementById('hold-period').value;
  successMessageDiv.textContent = `You have successfully held "${holdTitle}" for ${holdPeriod}. Request under Membership ID: ${memberId}.`;
  successMessageDiv.style.display = 'block';
  this.reset();
});
