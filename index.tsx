import * as React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Hello } from './Hello';
import { initEffects } from '@ngneat/effects';

console.clear();

initEffects();

function App() {
  return (
    <div>
      <h1>@ngneat/effects, @ngneat/effects-hooks</h1>
      <Hello />
    </div>
  );
}

// render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
