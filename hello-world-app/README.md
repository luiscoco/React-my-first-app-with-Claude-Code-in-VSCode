# Hello World — React + TypeScript + Vite

A beginner-friendly "Hello World" app built with [Vite](https://vite.dev), [React](https://react.dev), and [TypeScript](https://www.typescriptlang.org/). This README walks through exactly how the app was created and explains the TypeScript concepts used in the code.

<img width="1055" height="1491" alt="ChatGPT Image 13 sept 2026, 14_40_55" src="https://github.com/user-attachments/assets/8e642adb-e5be-46bc-a373-563844b7dc0d" />

## How this app was created

### 1. Scaffold the project

Vite has a built-in generator that creates a ready-to-go React + TypeScript project:

```bash
npm create vite@latest hello-world-app -- --template react-ts
```

This creates the `hello-world-app` folder with all the config files (`vite.config.ts`, `tsconfig.json`, etc.) already set up.

### 2. Install dependencies

```bash
cd hello-world-app
npm install
```

This downloads React, TypeScript, Vite, and their supporting packages into `node_modules`.

### 3. Write the Hello World component

The default template comes with a demo counter and logos. We replaced `src/App.tsx` with a smaller, more beginner-focused example:

```tsx
import { useState } from 'react'
import './App.css'

// TypeScript tip: this type describes the "shape" of the props object
// that our Greeting component accepts. `name` must be a string.
type GreetingProps = {
  name: string
}

// TypeScript tip: `GreetingProps` is used here to tell TypeScript exactly
// what props this component expects. If you forget to pass `name`, or pass
// a number instead of a string, TypeScript will show an error before you
// even run the app.
function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}! 👋</h1>
}

function App() {
  // TypeScript tip: `useState<number>` tells TypeScript that `count` will
  // always be a number, so `setCount` only accepts numbers too. Often you
  // can skip the <number> part and TypeScript will "infer" it from the
  // initial value (0), but writing it explicitly makes it clear for beginners.
  const [count, setCount] = useState<number>(0)

  // TypeScript tip: this function's parameter has no type annotation
  // because TypeScript infers it doesn't need one here (there is none) —
  // but the function itself is typed to return `void` (nothing), which
  // TypeScript figures out automatically from the fact that it has no
  // `return` statement.
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Greeting name="World" />
      <p>This is a simple Hello World app built with React + TypeScript + Vite.</p>
      <button type="button" onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default App
```

**What's happening here, step by step:**

- **`type GreetingProps = { name: string }`** — In plain JavaScript, nothing stops you from calling `<Greeting age={5} />` by mistake. In TypeScript, we declare the exact "shape" a component's props must have. Here, `Greeting` requires one prop called `name`, and it must be a `string`.
- **`function Greeting({ name }: GreetingProps)`** — This destructures `name` out of props, and `: GreetingProps` tells TypeScript to check it against the type we defined above.
- **`useState<number>(0)`** — `useState` is a React Hook that gives a component memory. The `<number>` part (called a "generic") tells TypeScript that this piece of state will always hold a number. If you later tried `setCount("hello")`, TypeScript would flag it as an error immediately, before you even run the app.
- **`function handleClick()`** — A plain function with no parameters and no return value. TypeScript automatically infers its return type as `void` (meaning "returns nothing").

### 4. Simplify the styling

`src/App.css` was replaced with a few simple rules to match the smaller component (removing the original template's hero image/logo styles):

```css
.App {
  max-width: 480px;
  margin: 0 auto;
  padding: 48px 20px;
  text-align: center;
}

.App button {
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
```

### 5. Remove unused template assets

The default template ships with a hero image and a React logo that our simplified app no longer references:

```bash
rm -f src/assets/hero.png src/assets/react.svg
```

### 6. Verify everything works

```bash
npm run build
```

This runs two things in sequence:
1. `tsc -b` — the TypeScript compiler, which type-checks every file (this is what catches mistakes like passing a number where a string was expected).
2. `vite build` — bundles the app into optimized static files in the `dist/` folder.

If both succeed with no errors, the app is good to go.

## Running the app locally

```bash
npm run dev
```

This starts Vite's dev server (with hot-reload) so you can see changes instantly in the browser, usually at `http://localhost:5173`.

## Why TypeScript?

Plain JavaScript only tells you about mistakes (like a typo in a prop name, or passing the wrong data type) when the code actually runs — sometimes only when a user hits that exact code path in production. TypeScript checks these things *before* you run anything, right in your editor, which makes it much easier to catch bugs early as a beginner.
