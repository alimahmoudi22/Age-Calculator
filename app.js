const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", ageCalculator);

function ageCalculator() {
  const birthDate = new Date(input.value);

  // Validate the input date
  if (isNaN(birthDate) || birthDate > new Date()) {
    result.innerHTML = "Please enter a valid past date.";
    return;
  }

  const { years, months, days } = calculateAge(birthDate);
  
  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

function calculateAge(birthDate) {
  const nowDate = new Date();

  let years = nowDate.getFullYear() - birthDate.getFullYear();
  let months = nowDate.getMonth() - birthDate.getMonth();
  let days = nowDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += daysInMonth(nowDate.getFullYear(), nowDate.getMonth());
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
