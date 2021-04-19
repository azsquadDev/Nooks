# @ian_test_nooks/use-beforeleave

React Hook to check mouse position when mouse leave element or area

```
npm i @ian_test_nooks/use-beforeleave
```

useBeforeLeave(callback function after mouse leave);
..
const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
..
```
import useBeforeLeave from "@ian_test_nooks/use-beforeleave";

const App = () => {
  const begForLife = () => console.log("Please dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
```