# @ian_test_nooks/use-fadein

React Hook to Fade In effect when element show or move

```
npm i @ian_test_nooks/use-fadein
```

const {ref, style} = usefadeIn(duration, delay);
```
import useFadeIn from "@ian_test_nooks/use-fadein";

const App = () => {
  const fadeInH1 = usefadeIn(1,2);
  const fadeInP = usefadeIn(5,10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hi</h1>
      <p {...fadeInP}>sdfsdafsdfsaddgfhh efdhgfd</p>
    </div>
  );
};
```