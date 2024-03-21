import { Select } from "./Select";


export default {
  component: Select
};
// const getValue = action('get value')
export const ControlledSelect = () => {
  return (
    <Select 
      // value={'value'}
      // onChange={getValue}
      items={[
        {title: 'Menu', value: '1'},
        {title: 'Profile', value: '2'},
        {title: 'Photo', value: '3'},
        {title: 'Setting', value: '4'}
      ]}
    />
  )
}
