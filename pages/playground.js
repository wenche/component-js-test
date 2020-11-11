import React, {useState} from 'react';
import {Tabs, Button} from '@equinor/eds-core-react'
const { TabList, Tab, TabPanels, TabPanel} = Tabs

const PlaygroundPage = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleChange = (index) => {
    setActiveTab(index)
  }
  return (
    
    <div style={{padding: '5rem'}}>
      <Tabs onChange={handleChange} activeTab={activeTab}>
        <TabList>
          <Tab>Tab one</Tab>
          <Tab>Tab two</Tab>
          {/*   <Tab>Accordion fun</Tab>
          <Tab>Avatar</Tab>
          <Tab>Banner</Tab>
          <Tab>Chips</Tab>
          <Tab>Typo </Tab>
          <Tab>Table </Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>Hola</TabPanel>
          <TabPanel><Button variant="contained">Click me!</Button></TabPanel>
{/*       <TabPanel><AccordionFun /></TabPanel>
          <TabPanel><AvatarFun /></TabPanel>
          <TabPanel><BannerTest /></TabPanel>
          <TabPanel><ChipFun /></TabPanel>
          <TabPanel><TypographyTest /></TabPanel>
          <TabPanel><TableTest /></TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PlaygroundPage;