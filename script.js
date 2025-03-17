document.addEventListener("DOMContentLoaded", () => {
    fetch("skills.html")
      .then(res => res.text())
      .then(data => document.getElementById("skills").innerHTML = data);
  
    fetch("contact.html")
      .then(res => res.text())
      .then(data => document.getElementById("contact").innerHTML = data);
  });