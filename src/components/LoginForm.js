import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import LogInButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

const defaultValues = {
	Name: "",
	Email: "",
	Password: "",
};

function LoginForm({ title, subtitle }) {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const { handleSubmit, control } = useForm({ defaultValues: defaultValues });

	const onSubmit = (data) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate("/exam");
		}, 1500);
	};

	return (
		<form>
			<Card sx={{ maxWidth: 500, margin: "5rem auto", border: "1px solid #7772" }} variant="outlined">
				<CardContent>
					<Box
						sx={{
							backgroundColor: "#EEE9",
							textAlign: "center",
							borderRadius: "5px 5px 0 0",
							padding: 2,
							marginBottom: "1rem",
						}}
					>
						<Typography sx={{ fontWeight: "bold" }} gutterBottom>
							{title}
						</Typography>
						<Typography color="textSecondary">{subtitle}</Typography>
					</Box>

					<Controller
						name={"Name"}
						control={control}
						rules={{ required: "This field is required" }}
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<FormControl fullWidth>
								<TextField
									onChange={onChange}
									value={value}
									label="Name"
									variant="outlined"
									margin="normal"
									aria-describedby="name-error-text"
								/>
								{error ? (
									<FormHelperText id="name-error-text" sx={{ color: "rgb(244, 67, 54)" }}>
										{error.message}
									</FormHelperText>
								) : null}
							</FormControl>
						)}
					/>

					<Controller
						name={"Email"}
						control={control}
						rules={{
							required: "This field is required",
							pattern: {
								value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
								message: "Invalid email address!",
							},
						}}
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<FormControl fullWidth>
								<TextField
									onChange={onChange}
									value={value}
									label="Email"
									variant="outlined"
									margin="normal"
									aria-describedby="email-error-text"
								/>
								{error ? (
									<FormHelperText id="email-error-text" sx={{ color: "rgb(244, 67, 54)" }}>
										{error.message}
									</FormHelperText>
								) : null}
							</FormControl>
						)}
					/>

					<Controller
						name={"Password"}
						control={control}
						rules={{ required: "This field is required" }}
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<FormControl fullWidth>
								<TextField
									onChange={onChange}
									value={value}
									label="Password"
									type="password"
									variant="outlined"
									margin="normal"
									aria-describedby="password-error-text"
								/>
								{error ? (
									<FormHelperText id="password-error-text" sx={{ color: "rgb(244, 67, 54)" }}>
										{error.message}
									</FormHelperText>
								) : null}
							</FormControl>
						)}
					/>
				</CardContent>
				<CardActions>
					<LogInButton
						sx={{
							padding: "0.75rem",
							fontSize: "1.25em",
							textTransform: "capitalize",
							boxShadow: "none",
							fontWeight: "lighter",
							mb: 2,
						}}
						fullWidth
						variant="contained"
						loading={loading}
						onClick={handleSubmit(onSubmit)}
					>
						Log in
					</LogInButton>
				</CardActions>
			</Card>
		</form>
	);
}

export default LoginForm;
