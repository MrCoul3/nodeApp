import React from "react";
import { FlexContainer } from "../containers/flex/FlexContainer";
import { Button } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { HorizontalLine } from "../Line/HorizontalLine";
import { useNavigate } from "react-router";

export const NavigationMenu = () => {
  const store = useStore();
  const navigate = useNavigate();

  return (
    <>
      <FlexContainer jContent={"center"}>
        <Button onClick={() => navigate("/about")}>
          {store.dict.navMenu.about}
        </Button>
        <Button onClick={() => navigate("/courses")}>
          {store.dict.navMenu.courses}
        </Button>
        <Button onClick={() => navigate("/guide")}>
          {store.dict.navMenu.guide}
        </Button>
      </FlexContainer>
    </>
  );
};
