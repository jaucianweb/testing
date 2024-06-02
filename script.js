// Define questions, answers, and scores
const questions = [
    { question: 'What is the integral of 3x^2 dx?', answer: 'x^3 + C', score: 10 },
    { question: 'What is the integral of sin(x) dx?', answer: '-cos(x) + C', score: 10 },
    { question: 'What is the integral of e^x dx?', answer: 'e^x + C', score: 10 },
    { question: 'What is the integral of 1/x dx?', answer: 'ln|x| + C', score: 10 },
    { question: 'Determine the area enclosed by the curvex y = x^3 - 2x^2 + x + 1 and the x-axis over the interval [0,2] using definire intefration.', answer: '8/3', score: 10 },
    { question: '', answer: '', score: 10 },
    { question: '', answer: '', score: 10 },
    { question: '', answer: '', score: 10 },
  ];
  
  let currentQuestionIndex = 0;
  let totalScore = 0;
  let userAnswers = []; // Store user's answers for review
  
  // Function to display current question
  function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
  }
  
  // Function to check answer
  function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  
    if (userAnswer.trim() === correctAnswer) {
      document.getElementById('result').textContent = 'Correct!';
      totalScore += questions[currentQuestionIndex].score;
    } else {
      document.getElementById('result').textContent = 'Incorrect. Try again.';
    }
  
    // Store user's answer for review
    userAnswers.push({ question: questions[currentQuestionIndex].question, userAnswer, correctAnswer });
  
    // Move to next question or show final result
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
      document.getElementById('answer').value = '';
    } else {
      document.getElementById('question').textContent = 'Quiz completed!';
      document.getElementById('answer').style.display = 'none';
      document.querySelector('button').style.display = 'none';
      document.getElementById('result').textContent = `Your total score is ${totalScore}`;
  
      // Show review button
      const reviewButton = document.createElement('button');
      reviewButton.textContent = 'Review Answers';
      reviewButton.onclick = reviewAnswers;
      document.body.appendChild(reviewButton);
  
      // Show back to home button
      const homeButton = document.createElement('button');
      homeButton.textContent = 'Back to Home';
      homeButton.onclick = backToHome;
      document.body.appendChild(homeButton);
    }
  }
  
  // Function to review answers
  function reviewAnswers() {
    // Clear previous content
    document.getElementById('result').textContent = '';
  
    // Create a list to display answers
    const answerList = document.createElement('ul');
  
    // Populate the list with user's answers
    userAnswers.forEach((answer, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Question ${index + 1}: ${answer.question} - Your Answer: ${answer.userAnswer} - Correct Answer: ${answer.correctAnswer}`;
      answerList.appendChild(listItem);
    });
  
    // Append the list to the document
    document.body.appendChild(answerList);
  
    // Remove the review button
    this.style.display = 'none';
  }
  
  // Function to redirect back to home page
  function backToHome() {
    // Redirect to home page
    window.location.href = 'index.html'; // Change 'index.html' to your home page URL
  }
  
  // Display first question when page loads
  displayQuestion();
  