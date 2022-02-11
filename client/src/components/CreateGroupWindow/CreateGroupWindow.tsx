import { observer } from "mobx-react";
import React, { ReactNode, useEffect, useState } from "react";
import style from "./style.module.css";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { CreateGroupIcon } from "../../icons/CreateGroupIcon";
import AddIcon from "@mui/icons-material/Add";
import { FlexContainer } from "../containers/flex/FlexContainer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useStore } from "../../hooks/useStore";
import { IGroupList } from "../../stores/GroupAppStore";

export interface IFieldsValue {
  id?: string | undefined;
  name: string | undefined;
  description: string | undefined;
}

export const CreateGroupWindow = observer(() => {
  const store = useStore();
  const [fields, setFields] = useState<Array<ReactNode>>([]);
  const [count, setCount] = useState<number>(0);

  const [fieldsValue, setFieldsValue] = useState<IFieldsValue>({
    name: "",
    description: "",
  });

  async function createGroup() {
    const values: IFieldsValue = { ...fieldsValue };
    const createdGroupID: any = await store.groupAppStore.createGroup(values);
    const createdGroupData = { ...fieldsValue, id: createdGroupID };

    if (store.groupAppStore.isRootDirectory) {
      await store.groupAppStore.localyUpdateGroupList(createdGroupData);
      await store.groupAppStore.setSelectedGroupElement(createdGroupData); // для перехода в текущую группу
    } else {
      // await store.groupAppStore.createGroupInGroup(values);
    }

    // после создания группы нужно сделать запрос на апи по имени группы , получить данные новой группы вместе с id
    // и добавить данные в setSelectedGroupElement() и groupList
    // const createdGroup: any = await store.groupAppStore.getGroupByID(createdGroupID); // : IGroupList

    await store.groupAppStore.closeCreateEditGroupWindow();
  }

  function onChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const defaultName: string | undefined =
      store.groupAppStore.selectedGroupElement?.name;
    const defaultDescription: string | undefined =
      store.groupAppStore.selectedGroupElement?.description;
    if (e.target.getAttribute("name") === "name") {
      setFieldsValue((prevState: IFieldsValue) => {
        return {
          ...prevState,
          name: target.value,
        };
      });
    } else {
      setFieldsValue((prevState: IFieldsValue) => {
        return {
          ...prevState,
          name: defaultName,
        };
      });
    }

    if (e.target.getAttribute("name") === "description") {
      setFieldsValue((prevState: IFieldsValue) => {
        return {
          ...prevState,
          description: target.value,
        };
      });
    } else {
      setFieldsValue((prevState: IFieldsValue) => {
        return {
          ...prevState,
          description: defaultDescription,
        };
      });
    }
  }
  // useEffect(()=> {
  //   console.log('fieldsValue', fieldsValue)
  // }, [fieldsValue])

  function onDelete(field: ReactNode) {}

  function onHandleClick() {
    setCount((prevState) => {
      return prevState + 1;
    });
    const field: ReactNode = (
      <FlexContainer key={count} gap={"10px"}>
        <div className={style.keyInput}>
          <InputLabel>Имя параметра</InputLabel>
          <TextField multiline={true} fullWidth={true} />
        </div>
        <div className={style.valueInput}>
          <InputLabel>Значение параметра</InputLabel>
          <FlexContainer alignItems={"center"}>
            <TextField fullWidth={true} />
            <div>
              <IconButton onClick={() => onDelete(field)}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </FlexContainer>
        </div>
      </FlexContainer>
    );
    setFields((prevState: Array<ReactNode>) => {
      prevState = [...prevState, field];
      return prevState;
    });
  }

  return (
    <div className={style.createGroupWindowWrap}>
      <header>
        {store.groupAppStore.isCreatedMode ? (
          <span>Создать группу</span>
        ) : (
          <span>Изменить группу</span>
        )}
      </header>
      <section>
        <div>
          <InputLabel>Название группы</InputLabel>
          <TextField
            name={"name"}
            onChange={onChange}
            defaultValue={
              store.groupAppStore.isCreatedMode
                ? ""
                : store.groupAppStore.selectedGroupElement?.name
            }
            multiline={true}
            fullWidth={true}
          />
        </div>
        <div>
          <InputLabel>Описание группы</InputLabel>
          <TextField
            name={"description"}
            onChange={onChange}
            defaultValue={
              store.groupAppStore.isCreatedMode
                ? ""
                : store.groupAppStore.selectedGroupElement?.description
            }
            multiline={true}
            fullWidth={true}
          />
        </div>

        {/*<div className={style.button}>*/}
        {/*  <Button*/}
        {/*    onClick={onHandleClick}*/}
        {/*    title={"Добавить дополнительное поле"}*/}
        {/*    startIcon={*/}
        {/*      <AddIcon width={"20px"} height={"20px"} fill={"white"} />*/}
        {/*    }*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*    value="new_group"*/}
        {/*  >*/}
        {/*    <span className={style.buttonText}>Добавить параметр</span>*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*{fields}*/}
      </section>
      <footer>
        <FlexContainer padding={"0 20px"} jContent={"flex-end"}>
          <Button
            onClick={() => store.groupAppStore.closeCreateEditGroupWindow()}
          >
            Отменить
          </Button>
          {store.groupAppStore.isCreatedMode ? (
            <Button onClick={createGroup}>Создать</Button>
          ) : (
            <Button
              onClick={() => {
                store.groupAppStore.updateGroup({ ...fieldsValue });
                store.groupAppStore.closeCreateEditGroupWindow();
              }}
            >
              Изменить
            </Button>
          )}
        </FlexContainer>
      </footer>
    </div>
  );
});