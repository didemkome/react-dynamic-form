import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form/Form";
import { FormField } from "../components/Form/FormField";
import { Button } from "../components/UI/Button";
import { emailRegex, passwordRegex } from "../utils/validation";
import { routes } from "../routes";

interface UserForm {
  fullname: string;
  email: string;
  password: string;
  remember?: boolean;
}

export const CreateUser = () => {
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState<Partial<UserForm>>({
    remember:true,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.remember) {
        setDefaultValues(parsed);
      }
    }
  }, []);

  const onSubmit = (data: UserForm) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate(routes.USER_DETAILS);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create User</h2>

        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
          <FormField
            name="fullname"
            label="Full Name"
          />

          <FormField
            name="email"
            label="Email"
            type="email"
            required
            validation={{
              required: "Email is required",
              pattern: {
                value: emailRegex,
                message: "Invalid email address",
              },
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
                message:
                  "Password must be alphanumeric and at least 6 characters",
              },
            }}
          />

          <FormField
            name="remember"
            label="Remember Me"
            type="checkbox"
            controlled
          />

          <Button type="submit" className="w-max mt-4 ml-32">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};