document.addEventListener("DOMContentLoaded", () => {
  const donorForm = document.getElementById("donorForm");
  const donorList = document.getElementById("donorList");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  let donors = [];

  // Add donor
  donorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = donorForm.elements["name"].value.trim();
    const bloodGroup = donorForm.elements["bloodGroup"].value;
    const contact = donorForm.elements["contact"].value.trim();

    if (name && bloodGroup && contact) {
      donors.push({ name, bloodGroup, contact });
      donorForm.reset();
      displayDonors(donors);
    }
  });

  // Search donors
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toUpperCase();
    if (query) {
      const filtered = donors.filter(
        (d) => d.bloodGroup.toUpperCase() === query
      );
      displayDonors(filtered);
    } else {
      displayDonors(donors);
    }
  });

  // Display donors helper function
  function displayDonors(list) {
    donorList.innerHTML = "";
    if (list.length === 0) {
      donorList.innerHTML = "<li>No donors found.</li>";
      return;
    }
    list.forEach((donor) => {
      const li = document.createElement("li");
      li.textContent = `${donor.name} | ${donor.bloodGroup} | ${donor.contact}`;
      donorList.appendChild(li);
    });
  }
});
