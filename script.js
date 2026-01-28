const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! You'll be notified when we launch ☕");
  form.reset();
});
