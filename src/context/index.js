import {useContext, createContext, useState,useEffect} from "react";
import axios from 'axios';

const username = 'Heo_Rey'
const key = 'aio_ytWg01LkyDDHKOEPbN6AO8XIDmpt'
async function getLastValue (feed_id){
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data/last`;
    const options = {
        headers: {
          'X-AIO-Key': key
        }
      };
    let res = await axios.get(url, options);
    return res.data.value;
}

const AppContext = createContext();


const AppProvider = (props)=>{
    const [user, setUser] = useState(true);
    const [temperature, setTemperature] = useState(0);
    const [lightIntensity, setLightIntensity] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [lightBtn, setLightBtn] = useState(false);
    const [pumperBtn, setPumperBtn] = useState(false);
    const [airBtn, setAirBtn] = useState(false);

    useEffect(()=>{
       const defaultValue = async () => {
        setTemperature(await getLastValue('temperature-sensor'))
        setLightIntensity(await getLastValue('light-sensor'))
        setHumidity(await getLastValue('humidity-sensor'))
        setLightBtn(await getLastValue('led'))
        setPumperBtn(await getLastValue('pumper'))
        setAirBtn(await getLastValue('fan'))
       }
       defaultValue()
    },[])
    return <AppContext.Provider 
    value={{user,setUser,temperature,setTemperature,
        lightIntensity,setLightIntensity,humidity,
        setHumidity,lightBtn,setLightBtn,pumperBtn,setPumperBtn,airBtn,setAirBtn
    }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext  = () => {
    return useContext(AppContext);
}
