# @ian_test_nooks/use-tabs

React Hook to change page data when click tab button

```
npm i @ian_test_nooks/use-tabs
```

const {currentItem Data Object, setCurrentIndex function} = useTabs(currentItem Index, Tab page contents Data);
```
import useTabs from "@ian_test_nooks/use-tabs";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "section 2",
    content: "I'm the content of the section 2"
  }
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
```