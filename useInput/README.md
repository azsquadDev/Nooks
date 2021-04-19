# @ian_test_nooks/use-input

React Hook to update your Input box and validator input data

```
npm i @ian_test_nooks/use-input
```

 useInput(default Text, validator function);
```
import useInput from "@ian_test_nooks/use-input";

const App = () => {
  const maxLen = (value) => {
    return value.length <= 10;
  };
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello`1</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```