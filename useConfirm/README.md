# @ian_test_nooks/use-confirm

React Hook to confirm popup

```
npm i @ian_test_nooks/use-confirm
```

const click event function = useConfirm(messege, confirm click callback function, abort click callback function);
```
import useConfirm from "@ian_test_nooks/use-confirm";

const App = () => {
  const deleteWorld = () => console.log("delete the World!");
  const abort = () => console.log("you save the world");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
```