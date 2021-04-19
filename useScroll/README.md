# @ian_test_nooks/use-scroll

React Hook to check scroll position when slide scroll

```
npm i @ian_test_nooks/use-scroll
```

const { current X, current Y } = useScroll(offsetX, offsetY);
```
import useScroll from "@ian_test_nooks/use-scroll";

const App = () => {
  const { x, y } = useScroll(0, 100);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "green" }}>
        hello
      </h1>
    </div>
  );
};
```