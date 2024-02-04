document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startBtn');
    const questionnaire = document.getElementById('questionnaire');
    const resultsSection = document.getElementById('results');

    const questions = [
        { question: "Are you currently enrolled in a post-secondary institution?", options: ["Yes", "No"] },
        { question: "Are you seeking opportunities in environmental careers?", options: ["Yes", "No"] }
        // Add more questions as needed
    ];

    startButton.addEventListener('click', function() {
        displayQuestions(); // Make sure this function is defined to show your questions
        questionnaire.style.display = 'block'; // Show the questionnaire section
        startButton.style.display = 'none'; // Optionally hide the start button
        //displayResults();
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Get the modal
        var modal = document.getElementById('questionnaireModal');
    
        // Get the button that opens the modal
        var btn = document.getElementById('startBtn');
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName('close')[0];
    
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = 'block';
            displayQuestions(); // Call this function to display questions.
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = 'none';
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });

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

    function answerQuestion(questionIndex, answer) {
        // Simplified logic to display results
        if(questionIndex === questions.length - 1) {
            displayResults();
        }
    }

    function displayResults() {

        document.getElementById('questionnaireModal').style.display = 'none';

        // Mock results based on the simplified prototype
        document.getElementById('questionnaire').style.display = 'none'; // Hide questionnaire
        const resultsDiv = document.getElementById('results');
        resultsDiv.style.display = 'block'; // Show results
        const eligibleProjectsList = document.getElementById('eligibleProjects');
        eligibleProjectsList.innerHTML = '<li>Project X: Environment Initiative</li><li>Project Y: Tech Innovation</li>'; // Mocked eligible projects
    }
});
