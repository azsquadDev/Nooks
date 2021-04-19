# @ian_test_nooks/use-title

React Hook to update your document's title

```
npm i @ian_test_nooks/use-title
```

```
import useTitle from "@ian_test_nooks/use-title";

const App = () => {
  const titleSet = useTitle("hi~!");
  return (
    <div className="App">
      <h1>Hello~!</h1>
    </div>
  );
};
```