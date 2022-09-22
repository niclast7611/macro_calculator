import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Form() {
  return (
    <div className="block">
      <Card
        sx={{
          width: "content",
          height: "content",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <CardContent>
          <h1 className="mb-2 text-3xl">Macro Calculator</h1>
          <div className="flex my-2 justify-center">
            <h2 className="mr-4 text-xl leading-loose">Gender</h2>
            <RadioGroup row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
          <TextField label="Age" variant="outlined" />
          <FormLabel>Weight</FormLabel>
          <TextField label="lbs" variant="outlined" />
          <FormLabel>Height</FormLabel>
          <TextField label="ft" variant="outlined" />
          <TextField label="in" variant="outlined" />
          <FormLabel id="demo-row-radio-buttons-group-label">
            Activity Level
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="1.2"
              control={<Radio />}
              label="Sedentary (little or no exercise)"
            />
            <FormControlLabel
              value="1.375"
              control={<Radio />}
              label="Lightly active (exercise 1–3 days/week)"
            />
            <FormControlLabel
              value="1.55"
              control={<Radio />}
              label="Moderately active (exercise 3–5 days/week)"
            />
            <FormControlLabel
              value="1.725"
              control={<Radio />}
              label="Active (exercise 6–7 days/week)"
            />
            <FormControlLabel
              value="1.9"
              control={<Radio />}
              label="Very active (hard exercise 6–7 days/week)"
            />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Your Goals
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="lose"
              control={<Radio />}
              label="Lose Weight"
            />
            <FormControlLabel value="gain" control={<Radio />} label="Gain" />
            <FormControlLabel
              value="maintain"
              control={<Radio />}
              label="Maintain"
            />
          </RadioGroup>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="outlined">
            Calculate
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
