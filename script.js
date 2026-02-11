const eventForm = document.getElementById("b1");
const eventName = document.getElementById("eName");
const eventDate = document.getElementById("eDate");
const eventCategory = document.getElementById("eOpt");
const eventDescription = document.getElementById("eDis");
const eventContainer = document.getElementById("eventList");
let sampleEvents = [
    {
        name: "Web Dev Workshop",
        date: "2026-06-04",
        category: "Work",
        description: "Hands-on JavaScript session"
    },
    {
        name: "Birthday Party",
        date: "2026-07-10",
        category: "Personal",
        description: "Celebrate with friends 🎉"
    }
];

function createEventCard(eventData) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h3>${eventData.name}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}
function addEvent(eventData) {

    const emptyState = document.querySelector(".no-events");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}
sampleEvents.forEach(function(event) {
    addEvent(event);
});
eventForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const eventData = {
        name: eventName.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    eventForm.reset();
});
