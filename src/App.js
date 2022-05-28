import { createContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import ExamPage from "./pages/Exam";
import ResultPage from "./pages/Result";

import { exam } from "./data";

export const ExamContext = createContext();

const App = () => {
	return (
		<ExamContext.Provider value={exam}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Navigate to="/login" />} />
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/exam" element={<ExamPage />} />
					<Route exact path="/result" element={<ResultPage />} />
					<Route exact path="*" element={<Navigate to="/login" />} />
				</Routes>
			</BrowserRouter>
		</ExamContext.Provider>
	);
};

export default App;
