
/*
 *
 * Context: `appContext`.
 *
 */
import { createContext } from "react";
import {trackingDataTypes, currentStatus} from "../interface";

 export const INITIAL_STATE:trackingDataTypes = {
    CurrentStatus:{} as currentStatus,
    PromisedDate:"",
    TrackingNumber:"",
    TrackingURL:"",
    SupportPhoneNumbers:[],
    TransitEvents:[]
}
 const TrackingContext = createContext({
     ...INITIAL_STATE
 })

export default TrackingContext;