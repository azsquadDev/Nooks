# @ian_test_nooks/use-click

React Hook to catch event when click element

```
npm i @ian_test_nooks/use-click
```

const useRef = useClick(callback function);
```
import useClick from "@ian_test_nooks/use-click";

const App = () => {
  const sayHello = () => console.log("Hello");

  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input placeholder="la" />
    </div>
  );
};
```