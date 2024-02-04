document.addEventListener('DOMContentLoaded', function() {
    openModal();
    displayQuestions();
});

const questions = [
    { question: "Are you currently enrolled in a post-secondary institution?", options: ["Yes", "No"] },
    { question: "Are you seeking opportunities in environmental careers?", options: ["Yes", "No"] }
    // Add more questions as needed
];

function openModal() {
    var modal = document.getElementById('questionnaireModal');
    modal.style.display = 'block';

    var closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
}

function closeModal() {
    var modal = document.getElementById('questionnaireModal');
    modal.style.display = 'none';
}

function outsideClick(e) {
    var modal = document.getElementById('questionnaireModal');
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function displayQuestions() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = ''; // Clear previous questions
    questions.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => answerQuestion(index, option));
            qDiv.appendChild(button);
        });
        questionsDiv.appendChild(qDiv);
    });
    document.getElementById('startBtn').style.display = 'none'; // Hide start button

}

function displayResults() {
    // Implement your logic to handle the submission of answers and display results
    document.getElementById('questionnaireModal').style.display = 'none';

        // Mock results based on the simplified prototype
        //document.getElementById('questionnaire').style.display = 'none'; // Hide questionnaire
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block'; // Show results
        const eligibleProjectsList = document.getElementById('eligibleProjects');
        eligibleProjectsList.innerHTML = '<li>Project X: Environment Initiative</li><li>Project Y: Tech Innovation</li>'; // Mocked eligible projects
}
