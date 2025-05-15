// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value || !email.value || !message.value) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List function
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to remove task
  li.addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
