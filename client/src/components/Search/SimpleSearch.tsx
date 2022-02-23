import React, { FormEvent, useState } from "react";
import { IExampleList } from "../../constants/constants";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem,
} from "@mui/material";
/**
 добавить отображаемые данные и их тип в хук useState
const [filteredData, setFilteredData] = useState < <IExampleList[]> > (
    < store.fetchData.exampleData >
);

function onFilterInput(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
        // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
        setFilteredData(< store.fetchData.exampleData >);
    } else {
        setFilteredData(
            // добавить отображаемые данные в setFilteredData -> (store.fetchData.exampleData)
            < store.fetchData.exampleData >.filter((data) =>
                // выбрать фильтруемые данные -> (data.name)
                < data.name >.toLowerCase().includes(target.value.toLowerCase().trim())
            )
        );
    }
}

 // Добавить на страницу компонент SimpleSearch -> <SimpleSearch onFilterInput={onFilterInput} />
 **/

interface IProps {
  filters?: boolean;
  filterTypes?: string[];
  filterLabels?: string[];
  onFilterInput?(e: FormEvent): void;
}

export const SimpleSearch = (props: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function renderFilterButton() {
    if (props.filters) {
      return (
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          filter
        </Button>
      );
    }
  }
  function renderFilterCheckBoxes() {
    if (props.filterLabels?.length) {
     return  props.filterLabels.map((label) => (
        <MenuItem>
          <FormControlLabel
            control={<Checkbox  />}
            label={label}
          />
        </MenuItem>
      ));
    }
  }
  return (
    <div>
      <input onInput={props.onFilterInput} type="text" />
      {renderFilterButton()}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {renderFilterCheckBoxes()}
      </Menu>
    </div>
  );
};
