# @ian_test_nooks/use-preventleave

React Hook to prevent Page before Leave

```
npm i @ian_test_nooks/use-preventleave
```

const { enablePrevent, disablePrevent } = usePreventLeave();
```
import usePreventLeave from "@ian_test_nooks/use-preventleave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};
```