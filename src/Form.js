import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Form() {
  return (
    <div>
      <FormControl>
        <TextField
              id="outlined-required"
              label="Age"
            />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      </FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Height</FormLabel>
      <TextField
              id="outlined-required"
              label="Feet"
            />
            <TextField
              id="outlined-required"
              label="Inches"
            />
            <FormLabel id="demo-radio-buttons-group-label">Weight</FormLabel>
      <TextField
              id="outlined-required"
              label="Pounds"
            />
    </div>
  )
}
