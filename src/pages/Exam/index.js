import { useContext } from "react";

import Exam from "../../components/Exam";

import { ExamContext } from "../../App";

const ExamPage = () => {
	const exam = useContext(ExamContext);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	return <Exam questions={shuffleArray(exam.questions)} />;
};

export default ExamPage;
