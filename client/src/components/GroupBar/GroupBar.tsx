import React, {useEffect} from "react";
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";
import style from './style.module.css';
import {GroupElement} from "../GroupElement/GroupElement";

export const GroupBar = observer(() => {
    const store = useStore();
    useEffect(()=> {
        setTimeout(()=> console.log(toJS(store.groupAppStore.groupList)), 500)
    }, [])

  return <div className={style.groupBar}>
      {store.groupAppStore.groupList.map((item) =>
            <GroupElement key={item.id} inputData={item}/>
      )}
  </div>;
});
