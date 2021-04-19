# @ian_test_nooks/use-notification

React Hook to show notification popup after grant permission

```
npm i @ian_test_nooks/use-notification
```

const trigerNotif = useNotification(title text, {
    body: bodyText
  });
```
import useNotification from "@ian_test_nooks/use-notification";

const App = () => {
  const trigerNotif = useNotification("Can I steel your kimchi?", {
    body: "I love kimchi dont you?"
  });
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={trigerNotif}>Hello</button>
    </div>
  );
};
```