import React,{useEffect} from 'react'
import dayjs from 'dayjs'
import { TimeField } from '@mui/x-date-pickers/TimeField'



export default function TimeItem() {
  //Google API KEY = AIzaSyD-NNTKSDKADqiBXVHL7FBS25z3_gsjksI
  //const currentTime = dayjs().tz("America/Milwaukee").format('LLLL');
  const currentTime = dayjs();
  const [value, setValue] = React.useState(currentTime);

  return (
    <>
      <TimeField
          label="Time"
          value={value}
          format="HH:mm:ss"
          readOnly
        />
    </>
  )
}
