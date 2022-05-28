import { useState, useEffect, useContext } from "react";

import Exam from "../../components/Exam";

import { ExamContext } from "../../App";

const ExamPage = () => {
	const [questions, setQuestions] = useState(null);

	const exam = useContext(ExamContext);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	useEffect(() => {
		setQuestions(exam.questions.map((question) => ({ ...question, answers: shuffleArray(question.answers) })));
	}, [exam]);

	return questions && <Exam questions={questions} />;
};

export default ExamPage;
