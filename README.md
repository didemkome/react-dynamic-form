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

## Setup & Running the Project

### Prerequisites

- Node.js >= 18.x
- pnpm >= 10.x

### Installation

```bash
git clone https://github.com/yourusername/react-dynamic-form.git
cd react-dynamic-form
pnpm install
```

## Controlled vs Uncontrolled Example

```tsx
// Controlled example (using state)
const [value, setValue] = useState('');
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled (default with react-hook-form)
<Input {...register("name")} />