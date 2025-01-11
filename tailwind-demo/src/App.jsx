import { useState } from 'react';
import { clsx } from 'clsx';

// Example with counter styles extracted to a function
export function App() {
  const [count, setCount] = useState(0);

  const getCounterClass = () => {
    if (count < 5) return 'bg-success-bg text-success-text';
    if (count < 10) return 'bg-warning-bg text-warning-text';
    return 'bg-danger-bg text-danger-text';
  };

  return (
    <div className='min-h-screen bg-[#f3f4f6] p-8'>
      {/* example of using arbitrary values */}
      <h1 className='text-3xl font-bold mb-4'>Tailwind Demo</h1>
      <button
        className='px-4 py-2 rounded-[0.375rem] bg-primary text-white border-none cursor-pointer transition-opacity hover:opacity-80 mb-4'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div className={clsx('p-4 rounded-lg ', getCounterClass())}>Count is: {count}</div>
      <div className='hidden sm:block md:hidden p-4 mt-4 rounded-lg bg-warning-bg text-warning-text'>
        Hey! I need a bit more space
      </div>
      <div className='sm:hidden p-4 mt-4 rounded-lg bg-danger-bg text-danger-text'>I'm getting squished!</div>
    </div>
  );
}

// Example with counter styles inlined
export function App2() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-[#f3f4f6] p-8'>
      <h1 className='text-3xl font-bold mb-4'>Tailwind Demo</h1>

      <button
        className='px-4 py-2 rounded-[0.375rem] bg-primary text-white border-none cursor-pointer transition-opacity hover:opacity-80 mb-4'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <div
        className={clsx(
          'p-4 rounded-lg',
          count < 5
            ? 'bg-success-bg text-success-text'
            : count < 10
            ? 'bg-warning-bg text-warning-text'
            : 'bg-danger-bg text-danger-text'
        )}
      >
        Count is: {count}
      </div>
      <div className={clsx('p-4 rounded-lg ', getCounterClass())}>Count is: {count}</div>
      <div className='hidden md:block lg:hidden p-4 mt-4 rounded-lg bg-warning-bg text-warning-text'>
        Hey! I need a bit more space
      </div>
      <div className='sm:hidden p-4 mt-4 rounded-lg bg-danger-bg text-danger-text'>I'm getting squished!</div>
    </div>
  );
}
