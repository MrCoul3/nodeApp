import {observer} from "mobx-react";
import style from "./style.module.css";
import React from "react";
import {strings} from "../../../locale";
export const SelectedObjectsBar = observer(() => {
return <div>
    <header className={style.header}>
        <div className={style.headerContent}>{strings.selectedObjects}</div>
    </header>
    <main>
    {/*  список добавленных объектов  */}
    </main>
</div>
});