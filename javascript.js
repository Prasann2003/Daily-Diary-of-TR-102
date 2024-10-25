function toggleContent(dayId) {
    const contentElement = document.querySelector(`#${dayId} .content`);
    contentElement.classList.toggle("active");
}