```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The function passed to setInterval doesn't
    // close over the current value of 'setCount'.  Instead, it always uses the
    // final value of 'setCount' after the loop has completed.
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```