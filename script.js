function calculateAge() {
    let currentYear = +prompt("Enter the current year:", new Date().getFullYear());
    let birthYear = +prompt("Enter your birth year:");

    if (isNaN(currentYear) || isNaN(birthYear)) {
      alert("Please enter valid years!");
      return;
    }

    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;

    let result = `
      <p>Current Year: <strong>${currentYear}</strong></p>
      <p>Birth Year: <strong>${birthYear}</strong></p>
      <p>You are either <strong>${age1}</strong> or <strong>${age2}</strong> years old.</p>
    `;
    document.getElementById("result").innerHTML = result;
  }

  function reset() {
    document.getElementById("result").innerHTML = "";
  }