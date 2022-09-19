import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default function Form() {
  return (
    <div className="grid h-screen place-items-center">
      <Card 
      variant="outlined" 
      className='h-fit w-[40rem] justify-center p-6 text-center' 
    >
           <h1 className='text-3xl pb-5' 
              >Macro Calculator</h1>

        <FormControl className='pb-5'>
          <TextField
                label="Age"/>

            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        <div className='flex-row justify-between pb-5'>

          <TextField label="Height (Feet)"/>

          <TextField label="Height (Inches)"/>
  
        </div>

          <TextField label="Weight in Pounds"/>


        <RadioGroup row>
          <FormControlLabel value="12" control={<Radio />} label="Loose" />
          <FormControlLabel value="14" control={<Radio />} label="Maintain" />
          <FormControlLabel value="15" control={<Radio />} label="Gain" />
        </RadioGroup>

        <Button variant="contained" color="success">Submit</Button>
        </FormControl>
      </Card>
    </div>
  )
}
