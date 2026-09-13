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
