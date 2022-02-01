import React, { useEffect } from "react";
import { GroupBar } from "../components/GroupBar/GroupBar";
import { GroupWindow } from "../components/GroupWindow/GroupWindow";
import { FlexContainer } from "../components/containers/flex/FlexContainer";
import { useStore } from "../hooks/useStore";
import {data} from "../constants/config";

export const GroupApp = () => {
  const store = useStore();

  const init = async () => {
    await store.groupAppStore.fetchGroupList()
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <FlexContainer gap={'30px'} width={"900px"} height={"600px"}>
      <GroupBar />
      <GroupWindow />
    </FlexContainer>
  );
};
