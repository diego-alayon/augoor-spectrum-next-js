import React, { useState } from 'react';
import { SearchField } from '@adobe/react-spectrum';

function InputSearchField() {
  const [searchValue, setSearchValue] = useState('puppies');
  
  return (
    <SearchField
    value={searchValue}
    onChange={setSearchValue}
    width={'size-6000'}
     />
  );
}

export default InputSearchField;
