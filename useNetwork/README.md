# @ian_test_nooks/use-network

React Hook to check online/offline

```
npm i @ian_test_nooks/use-network
```

const network status = useNetwork(network change listenner function);
```
import useNetwork from "@ian_test_nooks/use-network";

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we Just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <div>{onLine ? "Online" : "Offline"}</div>
    </div>
  );
};
```