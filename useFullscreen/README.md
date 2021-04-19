# @ian_test_nooks/use-fullscreen

React Hook to change screen mode fullscreen/normal screen

```
npm i @ian_test_nooks/use-fullscreen
```

const { useRef element, triggerFull function, exitFull function} = useFullscreen(change mode callback function);
```
import useFullscreen from "@ian_test_nooks/use-fullscreen";

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTFfMjAw/MDAxNTc4NzMwMzQ0MTcy.QguzdRQcCqWA2DJKeHVwuxPJV58Vqw4-bO4CXw2Xp98g.B1eM51dW7fEeKyZnt3uT5zirLNpEa1nSuZ2aV5U0-iEg.JPEG.insu1229/1578730343150.jpg?type=w800" />
        <button onClick={exitFull}> exitFull</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};
```