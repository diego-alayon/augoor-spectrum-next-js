"use client";
import React, { useState } from 'react';
import { Provider, View, defaultTheme, Grid, Flex, LogicButton } from '@adobe/react-spectrum';
import InputSearchField from './components/InputSearchField';
import Dropdown from './components/Dropdown';
import ToggelButtonEmpathized from './components/ToggleButtonEmphasized';
import SideBarMenu from './components/SideBarMenu';
import AgGridTabledemo from './components/AgGridTabledemo';

export default function Home() {
  const [variant, setVariant] = useState('or');

  return (
    <Provider theme={defaultTheme} colorScheme="dark" containerPadding={50} minHeight={'100vh'}>
      <Grid
          areas={[
            'sidebar content',
          ]}
          columns={['4rem', 'auto']}
          rows={['100vh']}
          // height="size-6000"
          gap="size-100"
          >
          <View gridArea="sidebar">
            <SideBarMenu />
          </View>
          <View gridArea="content" padding="size-200" backgroundColor={'gray-100'}>
            <Flex justifyContent={'space-between'}>
              <View marginBottom={'size-225'}>Search</View>
              <LogicButton
                variant={variant}
                onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
              >
                {variant}
              </LogicButton>
            </Flex>

            <View>
              <Flex gap="size-200" marginBottom={'size-500'}>
                <InputSearchField />
                <Flex gap='size-100'>
                  <ToggelButtonEmpathized label='Hide line2doc'/>
                  <ToggelButtonEmpathized label='Highlights' />
                </Flex>
                <Flex gap='size-100'>
                  <Dropdown />
                  <Dropdown />
                </Flex>

              </Flex>
              <AgGridTabledemo />
            </View>

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
