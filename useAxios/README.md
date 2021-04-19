# @ian_test_nooks/use-axios

React Hook to check axios data loading / complete and get data

```
npm i @ian_test_nooks/use-axios
```

const { loading, error, data, refetch } = useAxios({
    url: return JSON URL
  });
```
import useAxios from "@ian_test_nooks/use-axios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
  });

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
```