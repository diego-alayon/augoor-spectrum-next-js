import { ToggleButton } from "@adobe/react-spectrum";

function ToggelButtonEmpathized ({label}) {
    return (
        <ToggleButton isEmphasized defaultSelected>{label}</ToggleButton>
    );
  }
  export default ToggelButtonEmpathized;