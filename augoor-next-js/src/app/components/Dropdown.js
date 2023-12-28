import React, { useState } from 'react';
import { ComboBox, Item } from '@adobe/react-spectrum';

function Dropdown() {

    const [productId, setProductId] = useState(null);
    const options = [
      { id: 1, name: 'Adobe Photoshop' },
      { id: 2, name: 'Adobe Illustrator' },
      // Agrega más opciones según sea necesario
    ];
  
  return (
    <ComboBox
    aria-label="Select an Adobe product"
    defaultItems={options}
    defaultSelectedKey={1}
    selectedKey={productId}
    onSelectionChange={selected => setProductId(selected)}>
    {item => <Item key={item.id}>{item.name}</Item>}
  </ComboBox>
  );
}

export default Dropdown;
