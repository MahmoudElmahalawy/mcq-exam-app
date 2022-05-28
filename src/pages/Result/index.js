import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ResultCard from "../../components/ResultCard";

const ResultPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!location?.state) navigate("/");
	}, []);

	return (
		location?.state && <ResultCard userMarks={location.state.userMarks} totalMarks={location.state.totalMarks} />
	);
};

export default ResultPage;
