import React, { FormEvent, useEffect, useState } from "react";
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
  const renderFilterButton = () => {
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
  };
  const [filterData, setFilterData] = useState<Array<string> | undefined>([]);
  const [inputProps, setInputProps] = useState<
    { label: string; type: string | undefined }[] | undefined
  >([]);

  useEffect(() => {
    const data = props.filterLabels?.map((label, labelIndex) => {
      return {
        label: label,
        type: props.filterTypes?.find(
          (type, typeIndex) => typeIndex === labelIndex
        ),
      };
    });
    setInputProps(() => data);
  }, []);

  useEffect(() => {
    console.log(filterData);
  }, [inputProps, filterData]);

  function getChecked(currentType: string | undefined) {
    if (filterData?.length && currentType) {
      return filterData.includes(currentType);
    }
  }
  const [checked, setChecked] = useState<Array<boolean>>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
  function renderFilterCheckBoxes() {
    if (inputProps?.length) {
      return inputProps.map((item, index) => (
        <MenuItem dense={true}>
          <FormControlLabel
            sx={{
              minWidth: "100px",
              display: "block",
              marginRight: "0",
              height: "35px",
            }}
            control={
              <Checkbox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) {
                    setFilterData((prevState: any) => {
                      return [...prevState, item.type];
                    });
                  } else {
                    setFilterData((prevState: any) => {
                      return prevState?.filter(
                        (type: string) => type !== item.type
                      );
                    });
                  }
                }}
                checked={getChecked(item.type)}
              />
            }
            label={item.label}
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
