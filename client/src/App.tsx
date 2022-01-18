import { useEffect } from "react";
import { Button } from "@mui/material";
import { observer } from "mobx-react";
import { useStore } from "./hooks/useStore";

const App = observer(() => {
  const store = useStore();
  const init = async () => {
    const params = {
      name: "Coul",
    };
    await store.storage.fetchGetData("/api", params);
  };

  useEffect(() => {
    init();
  }, []);

  return <div className="App"></div>;
});
export default App;
