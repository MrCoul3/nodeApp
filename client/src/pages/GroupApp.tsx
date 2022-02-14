import React, { useEffect } from "react";
import { GroupBar } from "../components/GroupBar/GroupBar";
import { GroupWindow } from "../components/GroupWindow/GroupWindow";
import { FlexContainer } from "../components/containers/flex/FlexContainer";
import { useStore } from "../hooks/useStore";
import {observer} from "mobx-react";

export const GroupApp = observer(() => {
  const store = useStore();

  const init = async () => {
      store.groupAppStore.fetchGroupList();
      store.groupAppStore.fetchAllGroups()
  };

  useEffect(() => {
    init();
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        store.groupAppStore.closeCreateEditGroupWindow();
      }
    });
  }, []);

  return (
    <div style={{ width: "900px", height: "600px", border: "1px solid black" }}>
      <FlexContainer width={"900px"} height={"600px"}>
        <GroupBar />
        <GroupWindow />
      </FlexContainer>
    </div>
  );
});
