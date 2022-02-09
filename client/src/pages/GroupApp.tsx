import React, { useEffect } from "react";
import { GroupBar } from "../components/GroupBar/GroupBar";
import { GroupWindow } from "../components/GroupWindow/GroupWindow";
import { FlexContainer } from "../components/containers/flex/FlexContainer";
import { useStore } from "../hooks/useStore";
import { data } from "../constants/config";
import { IconWithText } from "../components/Icon/IconWithText";
import russianFlag from "../images/RussianFlag.svg";
import englishFlag from "../images/united-kingdom 1.svg";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export const GroupApp = () => {
  const store = useStore();


  const init = async () => {
    await store.groupAppStore.fetchGroupList();
  };
  useEffect(() => {
    init();
  }, []);

  function onContextMenu(e: React.MouseEvent) {
    console.log("onContextMenu");
    e.preventDefault();
  }

  return (
    <>

      <FlexContainer gap={"30px"} width={"900px"} height={"600px"}>
        <GroupBar />
        <GroupWindow />
      </FlexContainer>
    </>

  );
};
