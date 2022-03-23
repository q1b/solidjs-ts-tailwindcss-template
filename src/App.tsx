import type { Component } from 'solid-js';

const App: Component = () => {
  const c = (n:number):string => '&nbsp;'*n;
  return (
    <div class="flex flex-col items-center p-20">
      <header class="text-indigo-600">
        <p class="">
          Edit <span class="text-indigo-800 font-mono underline decoration-wavy">
                  src/App.tsx
                </span> 
          &nbsp;and 
          <span class="text-violet-600">
            save to reload.
          </span>
        </p>
        <a
          class="text-blue-600 underline pt-6"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
          <pre class="whitespace-pre-wrap">{`
╭────────────────────────╮
│  Solidjs + typescript  │
│      & tailwindcss     │
│    Minimal & simple    │
│     Clone & start      │
│   Update package name  │
╰────────────────────────╯
           `}
          </pre>
    </div>
  );
};

export default App;
