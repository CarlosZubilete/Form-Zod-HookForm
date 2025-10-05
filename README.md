# React Form with Zod Validation

A beautiful, modern React form component with Zod validation that you can use as a template for your projects. Features professional design, responsive layout, and smooth animations.

## Features

- **Modern Design System** - Professional glassmorphism UI with gradients
- **Fully Responsive** - Works perfectly on all device sizes
- **Form Validation** - Powered by Zod for robust type-safe validation
- **Smooth Animations** - Beautiful transitions and hover effects
- **Accessibility First** - WCAG compliant with keyboard navigation
- **TypeScript Ready** - Full type safety with TypeScript
- **Login/Register Toggle** - Dynamic form switching
- **Professional Styling** - CSS custom properties and modern design patterns

## Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone or download this project**

   ```bash
   git clone <your-repo-url>
   cd Form-Zod-Gentelman
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **CSS Custom Properties** - Modern styling approach

## 📁 Project Structure

```
src/
├── components/
│   └── CustomForm/
│       ├── components/
│       │   └── FormInput.tsx      # Reusable input component
│       ├── page/
│       │   └── FormPage.tsx       # Main form component
│       ├── schemas/
│       │   ├── form.schemaLogin.ts    # Login validation schema
│       │   └── form.schemaRegister.ts # Register validation schema
│       └── styles/
│           ├── FormInput.css      # Input component styles
│           └── FormPage.css       # Form page styles
├── App.tsx                        # Main app component
├── App.css                        # Global app styles
└── index.css                      # Design system & utilities
```

## 🎨 Design System

The project uses a comprehensive design system with CSS custom properties:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  --success-color: #10b981;
  --error-color: #ef4444;
  /* ... and more */
}
```

### Key Design Features

- **Glassmorphism Effect** - Frosted glass appearance with backdrop blur
- **Gradient Backgrounds** - Beautiful color transitions
- **Smooth Animations** - 60fps animations with CSS transitions
- **Professional Shadows** - Multi-level shadow system
- **Responsive Typography** - Scalable font sizes

## 📝 Usage Examples

### Basic Form Setup

```tsx
import { FormPage } from "./components/CustomForm/page/FormPage";

function App() {
  return (
    <div className="app">
      <FormPage />
    </div>
  );
}
```

### Custom Validation Schema

```tsx
import { z } from "zod";

const customSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
});
```

### Styling Your Own Forms

```css
/* Use the design system variables */
.my-form {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
}

.my-button {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: var(--radius-md);
  color: var(--text-white);
}
```

## Customization

### Colors

Update the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... */
}
```

### Form Fields

Modify the validation schemas in `src/components/CustomForm/schemas/`:

```tsx
export const schemaRegister = z.object({
  // Add your custom fields here
  customField: z.string().min(1, "Required field"),
});
```

### Styling

Customize the appearance by editing the CSS files:

- `src/index.css` - Global design system
- `src/components/CustomForm/styles/` - Component-specific styles

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ High contrast mode support
- ✅ Reduced motion preferences
- ✅ Focus indicators
- ✅ Semantic HTML structure

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React Hook Form](https://react-hook-form.com/) for form handling
- [Zod](https://zod.dev/) for validation
- [Vite](https://vitejs.dev/) for the build tool
- Modern CSS techniques for the beautiful design

---

**Made with ❤️ for the developer community**

_Perfect for: React projects, TypeScript applications, form templates, UI components_
