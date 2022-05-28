import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import QuestionCard from "./QuestionCard";

const Exam = ({ questions }) => {
	const [userAnswers, setUserAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const navigate = useNavigate();

	const goToNextQuestion = () => {
		setCurrentQuestionIndex((currentQ) => currentQ + 1);
	};

	const calcUserMarks = () => {
		let count = 0;

		for (let answer of userAnswers) {
			let q = questions.find((question) => question.questionId == answer.questionId);
			if (q && q.correctAnswerId == answer.userAnswer) count++;
		}

		return count;
	};

	useEffect(() => {
		if (currentQuestionIndex >= questions.length) {
			return navigate("/result", {
				replace: true,
				state: { userMarks: calcUserMarks(), totalMarks: questions.length },
			});
		}
		setCurrentQuestion(questions[currentQuestionIndex]);
	}, [currentQuestionIndex]);

	// useEffect(() => {
	// 	console.log(userAnswers);
	// }, [userAnswers]);

	return (
		<QuestionCard
			question={currentQuestion}
			questionNo={currentQuestionIndex + 1}
			goToNextQuestion={goToNextQuestion}
			setUserAnswers={setUserAnswers}
		/>
	);
};

export default Exam;
