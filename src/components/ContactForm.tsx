import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const schema = yup.object().shape({
		fullName: yup
			.string()
			.min(4, "Full name, please.")
			.max(40, "Is your full name really that long?")
			.required("Full name please."),
		email: yup
			.string()
			.email("That is not a valid email address.")
			.max(40)
			.required("Full email address please."),
		age: yup
			.number()
			.typeError("Please provide your age.")
			.integer()
			.max(150)
			.required("Please provide your age."),
		password: yup
			.string()
			.min(5, "Set a strong one")
			.max(30)
			.required("Set a strong password."),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords must match.")
			.required("Type the same password."),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	type Data = {
		fullName: string;
		email: string;
		age: number;
		password: string;
		confirmPassword: string;
	};

	const onSubmit: any = (data: Data[]) => {
		// TODO: apply proper type/interface, hard because of Yup?
		console.log(data);
	};
	return (
		<form
			className="grid mx-auto grid-cols-1 sm:grid-cols-2 sm:max-w-lg text-left gap-1"
			onSubmit={handleSubmit(onSubmit)}
		>
			{errors.fullName && (
				<div className="form-error text-red-700 col-span-2 text-right pb-0 mb-0 text-sm pr-1 pt-1">
					{errors.fullName.message}
				</div>
			)}
			<label htmlFor="form-full-name" className="xs:hidden">
				Full name
			</label>
			<input
				id="form-full-name"
				type="text"
				placeholder="Full name..."
				{...register("fullName")}
			/>
			{errors.email && (
				<div className="form-error text-red-700  col-span-2 text-right pb-0 mb-0 text-sm pr-1 pt-1">
					{errors.email?.message}
				</div>
			)}
			<label htmlFor="form-full-email" className="xs:hidden">
				E-mail
			</label>
			<input
				id="form-full-email"
				type="email"
				placeholder="E-mail..."
				{...register("email")}
			/>
			{errors.age && (
				<div className="form-error text-red-700  col-span-2 text-right pb-0 mb-0 text-sm pr-1 pt-1">
					{errors.age?.message}
				</div>
			)}
			<label htmlFor="form-full-age" className="xs:hidden">
				Age
			</label>
			<input
				id="form-full-age"
				type="number"
				placeholder="Age..."
				{...register("age")}
				name="age"
			/>
			{errors.password && (
				<div className="form-error text-red-700  col-span-2 text-right pb-0 mb-0 text-sm pr-1 pt-1">
					{errors.password?.message}
				</div>
			)}
			<label htmlFor="form-full-password" className="xs:hidden">
				Password
			</label>
			<input
				id="form-full-password"
				type="password"
				placeholder="Password..."
				{...register("password")}
			/>
			{errors.confirmPassword && (
				<div className="form-error text-red-700  col-span-2 text-right pb-0 mb-0 text-sm pr-1 pt-1">
					{errors.confirmPassword?.message}
				</div>
			)}
			<label htmlFor="form-confirm-password" className="xs:hidden">
				Confirm password
			</label>
			<input
				id="form-confirm-password"
				type="password"
				placeholder="Confirm Password..."
				{...register("confirmPassword")}
			/>
			<br />
			<input
				type="submit"
				className="my-3 block right-0 float-right"
				value="Send!"
			/>
		</form>
	);
};
export default ContactForm;
