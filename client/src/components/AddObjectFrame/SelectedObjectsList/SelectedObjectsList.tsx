import { observer } from "mobx-react";
import style from "./style.module.css";
import React from "react";
import { strings } from "../../../locale";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import { FlexContainer } from "../../containers/flex/FlexContainer";
import { CreateGroupIcon } from "../../../icons/CreateGroupIcon";
import { useStore } from "../../../hooks/useStore";
export const SelectedObjectsList = observer(() => {
  const store = useStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleContextMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContextMenuClose = () => {
    setAnchorEl(null);
  };
  async function onHandleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === "BUTTON") {
      await store.addObjectStore.fetchClassIDs();
      // await store.addObjectStore.fetchClasses(store.addObjectStore.objectClassIds);
    }
  }
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        {/*  меню выбора класса   */}
        <Button
          onClick={(e) => {
            handleContextMenuOpen(e);
            onHandleClick(e);
          }}
        >
          <VideocamIcon />
          {strings.hardware}
        </Button>
        {/*  поиск   */}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleContextMenuClose}
      >
        {/* спсисок классов */}
        <MenuItem
          onClick={() => {
            handleContextMenuClose();
          }}
        >
          <FlexContainer gap={"10px"}>
            <CreateGroupIcon width={"24px"} fill={"#767676"} />
            <span>{strings.createGroup}</span>
          </FlexContainer>
        </MenuItem>
      </Menu>
    </header>
  );
});
