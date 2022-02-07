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
    <ContextMenuTrigger  id="same_unique_identifier" >

      <ContextMenu  id="same_unique_identifier">
        <MenuItem data={{foo: 'bar'}} >
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{foo: 'bar'}}  >
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{foo: 'bar'}}  >
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>
      <FlexContainer gap={"30px"} width={"900px"} height={"600px"}>
        <GroupBar />
        <GroupWindow />
      </FlexContainer>
    </ContextMenuTrigger>
  );
};
