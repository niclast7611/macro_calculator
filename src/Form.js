import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function Form() {
  return (
    <div>
      <FormControl>
        <TextField
              id="outlined-required"
              label="Age"/>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">Height</FormLabel>
        <TextField
              id="outlined-required"
              label="Feet"/>
        <TextField
              id="outlined-required"
              label="Inches"/>
      <FormLabel id="demo-radio-buttons-group-label">Weight</FormLabel>
        <TextField
                id="outlined-required"
                label="Pounds"/>
      <FormLabel id="demo-simple-select-label">Activity</FormLabel>
        <Select
          label="Activity">
            {/* need to change values and add default value */}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

      </FormControl>
    </div>
  )
}
