import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form/Form";
import { FormField } from "../components/Form/FormField";
import { Button } from "../components/UI/Button";
import { emailRegex, passwordRegex } from "../utils/validation";

interface LoginForm {
  email: string;
  password: string;
}

export const LoginUncontrolled = () => {
  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    alert("Uncontrolled form submitted: " + JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login (Uncontrolled)</h2>
        <Form<LoginForm> onSubmit={onSubmit}>
          <FormField
            name="email"
            label="Email"
            type="email"
            required
            validation={{
              required: "Email is required",
              pattern: { value: emailRegex, message: "Invalid email" },
            }}
          />
          <FormField
            name="password"
            label="Password"
            type="password"
            required
            validation={{
              required: "Password is required",
              pattern: {
                value: passwordRegex,
                message: "Password must be alphanumeric and 6+ chars",
              },
            }}
          />
          <Button type="submit" className="w-full mt-4 ml-32">Login</Button>
        </Form>
      </div>
    </div>
  );
};
