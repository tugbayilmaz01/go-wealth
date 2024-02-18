import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function LanguageSwitch() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          content={checked ? "EN" : "TR"}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
    />
  );
}
