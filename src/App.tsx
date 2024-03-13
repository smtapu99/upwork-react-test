import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RootState } from "./store";
import { setNote, setOption } from "./store/app/slice";
import { Box } from "@mui/material";
import { useState } from "react";
import { discountRegExp, generateRandomString } from "./utils";

// TODO
// Move to style component file
const Container = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// TODO
// Move to style component file
const Textarea = styled(TextField)`
  width: 300px;
  min-height: 250px;
`;

function App() {
  const option = useSelector((state: RootState) => state.app.option);
  const note = useSelector((state: RootState) => state.app.note);
  const dispatch = useDispatch();

  const [discountCode, setDiscountCode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const onChangeDiscountCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
    setIsError(!discountRegExp.test(event.target.value));
  };

  const handleChangeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOption((event.target as HTMLInputElement).value));
  };

  const handleChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNote((event.target as HTMLInputElement).value));
  };

  const onGenerateNewCode = () => {
    setIsError(false);
    setDiscountCode(generateRandomString());
  };
  return (
    <Container>
      <Box display="flex" flexDirection="column" gap={2}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={option}
            onChange={handleChangeOption}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <TextField
            id="demo-discount-label-text"
            label="Discount code"
            variant="outlined"
            error={isError}
            value={discountCode}
            onChange={onChangeDiscountCode}
          />
        </FormControl>
        <FormControl>
          <Button variant="outlined" onClick={onGenerateNewCode}>
            Generate
          </Button>
        </FormControl>
        <FormControl>
          <Textarea
            id="demo-note-text"
            label="Note"
            variant="outlined"
            minRows={3}
            multiline
            value={note}
            onChange={handleChangeNote}
          />
        </FormControl>
      </Box>
    </Container>
  );
}
export default App;
