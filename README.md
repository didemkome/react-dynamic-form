# React Dynamic Form

## Project Structure

```
    src/
    ├── components/
    │   ├── Form/
    │   │   ├── Form.tsx          # Main form wrapper with React Hook Form
    │   │   ├── FormField.tsx     # Form field component (inputs, checkboxes)
    │   ├── UI/
    │   │   ├── Input.tsx         # Custom input with error handling and password toggle
    │   │   └── Button.tsx        # Styled button component
    │   │   ├── Select.tsx        # Custom select group component
    │   │   └── Checkbox.tsx      # Custom checkbox group component
    │   │   └── RadioGroup.tsx    # Custom radio group component
    ├── pages/
    │   ├── CreateUser.tsx        # User creation form page
    │   ├── UserDetails.tsx       # User details display page
    ├── utils/
    │   └── validation.ts         # Regex patterns for email and password validation
    ├── routes.ts                 # Route constants
    ├── main.tsx                  # React app entry point
    ├── index.css                 # Tailwind base styles

```


---

## Design Philosophy

This project is built to provide:

- ✅ A **single source of truth** for rendering all form fields.
- ✅ Smart switching between **controlled** and **uncontrolled** inputs.
- ✅ Consistent **layout structure** across field types.
- ✅ Easy **reusability** for future forms and components.
- ✅ Clean **separation of UI and form logic**.


---



### Controlled vs Uncontrolled Fields

React Hook Form offers better performance with **uncontrolled inputs**. However, some components like `<Select />`, `<Checkbox />`, and `<RadioGroup />` require **controlled** behavior for better UI control and value management.

In this project:

- **Text-based inputs** (`text`, `email`, `password`) use **uncontrolled** fields.
- **Custom components** (`select`, `checkbox`, `radio`) are handled via `Controller`.

```tsx
// ✅ Controlled (when using custom components)
<Controller
  control={control}
  name="gender"
  render={({ field }) => <Select {...field} options={options} />}
/>

// ✅ Uncontrolled (for native input types)
<input {...register("email")} />
```

---

## Setup & Running the Project

### Prerequisites

- Node.js >= 18.x
- pnpm >= 10.x

### Installation

```bash
git clone https://github.com/didemkome/react-dynamic-form
cd react-dynamic-form
pnpm install
pnpm dev
```
 ---

## 🔗 Live Demo

You can view the live version of the project here:  
👉 [https://majestic-torrone-4699e8.netlify.app](https://majestic-torrone-4699e8.netlify.app)
