import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResultCard = ({ userMarks, totalMarks }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: "5rem auto", padding: "3rem" }} variant="outlined">
			<CardContent sx={{ textAlign: "center" }}>
				<Typography gutterBottom variant="h3" component="div">
					Your Score
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					{((userMarks / totalMarks) * 100).toFixed(2)}%
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ResultCard;
