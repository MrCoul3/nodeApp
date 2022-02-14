import React, { useState } from "react";
import style from "./style.module.css";
import { FlexContainer } from "../../containers/flex/FlexContainer";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CreateGroupIcon } from "../../../icons/CreateGroupIcon";
import { EditGroupIcon } from "../../../icons/EditGroupIcon";
import { DeleteGroupIcon } from "../../../icons/DeleteGroupIcon";
import { AddObjectToGroupIcon } from "../../../icons/AddObjectToGroupIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { toJS } from "mobx";
export const GroupWindowHead = observer(() => {
  const store = useStore();

  const [isDeleteGroup, setIsDeleteGroup] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleContextMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContextMenuClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function deleteGroup() {
    store.groupAppStore.deleteGroup(
      store.groupAppStore.selectedGroupElement?.id
    );
    store.groupAppStore.locallyDeleteGroup(
      store.groupAppStore.selectedGroupElement?.id
    );
    store.groupAppStore.setSelectedGroupElement(null);
    handleClose();
  }

  function deleteGroupContent() {
    const deleteData = {
      group_id: store.groupAppStore.selectedGroupElement?.id,
      object_ids: store.groupAppStore.selectedElementsIDs,
    };
    store.groupAppStore.deleteGroupContent(deleteData);
    deleteData.object_ids.forEach((id) => {
      const deletedGroup = store.groupAppStore.groupList.find(
        (group) => group.id === id
      );
      store.groupAppStore.deleteGroup(deletedGroup?.id);
    });
    store.groupAppStore.locallyDeleteGroupContent(deleteData.object_ids);

    handleClose();
  }

  return (
    <div className={style.groupWindowHead}>
      <FlexContainer padding={"3px 0"} jContent={"space-between"}>
        <FlexContainer gap={"10px"} alignItems={"center"}>
          {/*<GroupIcon width={'32px'} fill={'#428BCA'} />*/}
          <span>{store.groupAppStore.selectedGroupElement ? store.groupAppStore.selectedGroupElement?.name : "Список групп"}</span>
        </FlexContainer>

        <FlexContainer gap={"15px"}>
          {store.groupAppStore.selectedElementsIDs.length > 0 ? (
            <Button
              onClick={() => {
                setIsDeleteGroup(false);
                handleClickOpen();
              }}
              title={"Удалить выбранные"}
              variant="contained"
              color="primary"
              value="add_button"
            >
              {<DeleteOutlinedIcon />}
            </Button>
          ) : null}

          {/*<div title={"Изменить вид"} className={style.viewIcon}>*/}
          {/*  <IconButton*/}
          {/*  // onClick={}*/}
          {/*  >*/}
          {/*    <GridViewOutlinedIcon />*/}
          {/*  </IconButton>*/}
          {/*</div>*/}

          <Button
            onClick={() => store.groupAppStore.setCreatedMode(true)}
            title={"Создать группу"}
            variant="contained"
            color="primary"
            value="add_button"
          >
            {<AddOutlinedIcon />}
          </Button>
          {store.groupAppStore.selectedGroupElement ? (
            <IconButton title={"открыть меню"} onClick={handleContextMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <div></div>
          )}
        </FlexContainer>
      </FlexContainer>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleContextMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleContextMenuClose();
            store.groupAppStore.setCreatedMode(true);
          }}
        >
          <FlexContainer gap={"10px"}>
            <CreateGroupIcon width={"24px"} fill={"#767676"} />
            <span>Создать группу</span>
          </FlexContainer>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleContextMenuClose();
            store.groupAppStore.setEditMode(true);
          }}
        >
          <FlexContainer gap={"10px"}>
            <EditGroupIcon width={"24px"} fill={"#767676"} />
            <span>Изменить группу</span>
          </FlexContainer>
        </MenuItem>

        <MenuItem
          onClick={() => {
            setIsDeleteGroup(true);
            handleContextMenuClose();
            handleClickOpen();
          }}
        >
          <FlexContainer gap={"10px"}>
            <DeleteGroupIcon width={"24px"} fill={"#767676"} />
            <span>Удалить группу</span>
          </FlexContainer>
        </MenuItem>

        {store.groupAppStore.selectedElementsIDs.length > 0 ? (
          <MenuItem
            onClick={() => {
              setIsDeleteGroup(false);
              handleContextMenuClose();
              handleClickOpen();
            }}
          >
            <FlexContainer gap={"10px"}>
              <DeleteGroupIcon width={"24px"} fill={"#767676"} />
              <span>Удалить выбранные</span>
            </FlexContainer>
          </MenuItem>
        ) : null}
        <MenuItem
          onClick={() => {
            handleContextMenuClose();
          }}
        >
          <FlexContainer gap={"10px"}>
            <InfoOutlinedIcon color={"action"} />
            <span>Информация</span>
          </FlexContainer>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleContextMenuClose();
          }}
        >
          <FlexContainer gap={"10px"}>
            <AddObjectToGroupIcon width={"24px"} fill={"#767676"} />
            <span>Добавить объекты</span>
          </FlexContainer>
        </MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isDeleteGroup
            ? "Вы уверены, что хотите удалить группу?"
            : "Удалить выбранные объекты?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {store.groupAppStore.objectIDsList.length > 0
              ? "В группе содержаться объекты. После удаления отменить действие будет невозможно"
              : "После удаления отменить действие будет невозможно"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button
            onClick={() =>
              isDeleteGroup ? deleteGroup() : deleteGroupContent()
            }
            autoFocus
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
