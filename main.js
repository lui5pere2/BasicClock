/*******************************************
 * Inserting a string onto the page
 *******************************************/

// Add a title inside of the h1 element.
document.getElementById('title').textContent = 'My Dashboard';

// When I click on the title, open an alert!
// document.getElementById("title").addEventListener("click", handleTitleClick);
// function handleTitleClick() {
//   alert('Huzzah!');
// }

// When I click on the title, open a prompt.
document.getElementById("title").addEventListener("click", handleTitleClick);
function handleTitleClick() {
  const dashboardName = prompt('Enter a new dashboard title.', 'My Dashboard');
  document.getElementById('title').textContent = dashboardName;
}

/*******************************************
 * Working with Date()
 *******************************************/

// Display the date and time of page load.
// This is static and doesn't stay updated.
document.getElementById('time').textContent = new Date();

// Display the current date.
const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

const currentDate = new Date();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const dateString = day + " " + monthNames[month] + " " + year;
document.getElementById('date').textContent = dateString;

/*******************************************
 * Using Functions
 *******************************************/

// Keep the time updated by the second.
function startTime() {
  // Create a new date.
  const today = new Date();

  // Pull the hours out of the date.
  let hours = today.getHours();

  // Figure out if it's AM or PM.
  const meridiem = hours >= 12 ? 'pm' : 'am';

  // Let's use 12-hour time instead of 24-hour.
  hours = hours % 12;
  hours = hours ? hours : 12;

  // If the hour is a single digit, add a '0' in front of it.
  hours = hours < 10 ? '0' + hours : hours;
  // Pop Quiz! True or False? The variable for hours is a number.
  // Find out by uncommenting below:
  // console.log(`The variable "hours" has the type ${typeof hours}`);

  // Pull the minutes out of the date.
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Pull the seconds out of the date.
  let seconds = today.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Build a string with the variables we made above.
  const timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Display the string on the document (our index.html page).
  document.getElementById('time').textContent = timeString;

  // This sets a timer for 500 millisecons (1/2 of a second).
  // When the the timer runs out, it runs startTime() again.
  const timeout = setTimeout(startTime, 500);
}
startTime();
