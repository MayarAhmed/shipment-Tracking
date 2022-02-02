import React, { useState,memo, useMemo, useCallback} from "react";
import axios from "axios";
import { notification } from 'antd';
import TrackingContext, {INITIAL_STATE} from "./context"
import { trackingDataTypes, ParentProps } from "../interface"

const TrackingProvider = ({children}: ParentProps) =>{
    const[contextValue,setContextValue] = useState(null);
    
    const openNotificationWithIcon = (type:string) => {
      //@ts-ignore
      notification[type]({
        message: 'Something Went Wrong',
        description:
          'Kindly Enter Valid Tracking Number',
      });
    };

    const checkParam = useCallback((param:string)=>{
        axios.get('https://tracking.bosta.co/shipments/track/' + param )
        .then( response => {
            setContextValue(response.data)
        })
        .catch((error) => {
          openNotificationWithIcon('error')
        })
    },[contextValue]);

      const providerValue = useMemo(()=>
      ({contextValue,setContextValue,checkParam}),
      [contextValue,setContextValue,checkParam])
   
      return(
         // @ts-ignore
        <TrackingContext.Provider value={providerValue}>
          {children}
        </TrackingContext.Provider>
    )
}

export default memo(TrackingProvider);