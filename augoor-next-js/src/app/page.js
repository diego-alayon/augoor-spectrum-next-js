"use client";
import React, { useState } from 'react';
import { SearchField, Provider, View, defaultTheme, Flex, row, Grid, Item } from '@adobe/react-spectrum';

export default function Home() {
  const [searchValue, setSearchValue] = useState('puppies');

  return (
    <Provider theme={defaultTheme} colorScheme="dark" containerPadding={50} minHeight={'100vh'}>
      <Grid
          areas={[
            'sidebar content',
          ]}
          columns={['4.5rem', 'auto']}
          rows={['100vh']}
          // height="size-6000"
          gap="size-100">
          <View gridArea="sidebar" padding="size-200">1</View>
          <View gridArea="content" padding="size-200">
            <div>Search</div>
            <SearchField
              value={searchValue}
              onChange={setSearchValue}
              width={'100%'}
               />
          </View>
        </Grid>
      {/* <View>
        <View padding="size-250">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </View>
        <ActionButton>Edit</ActionButton>
      </View> */}
  </Provider>
   
  )
}
