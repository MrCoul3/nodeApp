import React, { useEffect, useState } from "react";
import { GroupApp } from "./pages/GroupApp";
import { useStore } from "./hooks/useStore";
import {observer} from "mobx-react";

const App = observer(() => {
  const store = useStore();
  const [state, setState] = useState<string>("");
  useEffect(() => {
    const token = store.groupAppStore.fetchToken();
    token.then((result) => {
      setState(result);
    });
  }, []);

  return (
    <>
        {store.groupAppStore.token !== "" ?
            <GroupApp /> : null
        }
    </>
  );
});

export default App;
