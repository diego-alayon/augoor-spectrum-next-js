import React, { useState } from 'react';
import LogicButton from "@adobe/react-spectrum"; // Adjust the path according to your project structure

function LogicButtons() {
  const [variant, setVariant] = useState('or');

  return (
    <LogicButton
      isEmphasized
      variant={variant}
      onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
    >
      {variant}
    </LogicButton>
  );
}

export default LogicButtons;
