// script.js

// Search functionality for courses
document.querySelector('.hero input').addEventListener('input', function (event) {
    const searchQuery = event.target.value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// View course details functionality
document.querySelectorAll('.course-card button').forEach((button, index) => {
    button.addEventListener('click', function () {
        alert(`You clicked to view details of Course ${index + 1}`);
    });
});

// Update progress tracker dynamically
function updateProgressTracker() {
    const progressList = document.querySelector('.progress-tracker ul');
    const courses = document.querySelectorAll('.course-card');
    progressList.innerHTML = ''; // Clear existing progress list

    courses.forEach((course, index) => {
        const courseTitle = course.querySelector('h3').textContent;
        const progress = course.querySelector('p:nth-child(3)').textContent;
        const listItem = document.createElement('li');
        listItem.textContent = `${courseTitle} - ${progress}`;
        progressList.appendChild(listItem);
    });
}
updateProgressTracker(); // Initial call to populate progress tracker
