import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const QuestionCard = ({ question, questionNo, goToNextQuestion, setUserAnswers }) => {
	const [radioValue, setRadioValue] = useState("");
	const [userAnswer, setUserAnswer] = useState("");

	const handleAnswerSelect = (e) => {
		setRadioValue(e.target.value);
		setUserAnswer({ questionId: question.questionId, userAnswer: e.target.value });
	};

	useEffect(() => {
		setRadioValue("");
	}, [question]);

	return (
		<Box sx={{ minWidth: 275, maxWidth: 750, margin: "5rem auto" }}>
			{question && (
				<Card variant="outlined">
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							Q. No {questionNo}
						</Typography>
						<Typography variant="h5" component="div" sx={{ mb: 1.5, mt: 1.5 }}>
							{question.questionText}
						</Typography>

						<FormControl sx={{ paddingLeft: 5 }}>
							<RadioGroup
								value={radioValue}
								name={`question-${question.questionId}`}
								onChange={handleAnswerSelect}
							>
								{question.answers.map((answer) => (
									<FormControlLabel
										key={answer.answerId}
										value={answer.answerId}
										control={<Radio />}
										label={answer.answerText}
									/>
								))}
							</RadioGroup>
						</FormControl>
					</CardContent>
					<CardActions>
						<Button
							size="medium"
							sx={{ marginLeft: "auto" }}
							disabled={!radioValue}
							onClick={() => {
								setUserAnswers((oldState) => [...oldState, userAnswer]);
								goToNextQuestion();
							}}
						>
							{questionNo === 7 ? "Finish" : "Next"}
						</Button>
					</CardActions>
				</Card>
			)}
		</Box>
	);
};

export default QuestionCard;
