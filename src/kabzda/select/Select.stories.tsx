import { useState } from "react";
import { Select } from "./Select";


export default {
  component: Select
};
// const getValue = action('get value')
export const ControlledSelect = () => {
  const [select, setSelect] = useState('Menu');
  const getItem = (item: { title: string; value: string }) => {
  
    setSelect(item.title);
  };
  return (
    <Select 
      items={[
        {title: 'Menu', value: '1'},
        {title: 'Profile', value: '2'},
        {title: 'Photo', value: '3'},
        {title: 'Setting', value: '4'}
      ]}
      getItem={getItem}
      select={select}
    />
  )
}
