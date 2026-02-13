// Target the HTML elements (form, inputs, buttons)
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

// Take 2 sample events for demo
let sampleEvents = [
    {
        title: "Web Dev Workshop",
        date: "2026-06-04",
        category: "Workshop",
        description: "Learn JavaScript with hands-on practice."
    },
    {
        title: "Tech Conference",
        date: "2026-07-10",
        category: "Conference",
        description: "Annual technology networking event."
    }
];
// Create event card (stores user data inside div)
function createEventCard(eventData) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    // Delete button functionality
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        card.remove();
        checkEmptyState();
    });
    return card;
}
// Add the created event inside container
function addEvent(eventData) {

    // If empty state is present then remove it
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

// Check if container is empty

function checkEmptyState() {
    if (eventContainer.children.length === 0) {
        eventContainer.innerHTML =
            `<div class="empty-state">
                No events yet. Add your first event!
            </div>`;
    }
}
// Handle form submit

eventForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    eventForm.reset();
});
// Clear All Events

clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML = "";
    checkEmptyState();
});
// Add Sample Events

addSampleBtn.addEventListener("click", function () {
    sampleEvents.forEach(function (event) {
        addEvent(event);
    });
});
// DOM Manipulation Demo

document.addEventListener("keydown", function (e) {
    demoContent.textContent = "You pressed a key! 🎉"+ e.key;
    demoContent.style.backgroundColor = "lightblue";
});
