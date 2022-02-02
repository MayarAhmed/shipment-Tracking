export type FlexStyleProps = {
    justify?: string;
    background?:string;
    bordered?:boolean;
    column?:boolean;
    align?:string;
    width?:string;
    margin?:string;
    padding?:string;
    direction?:string;
}

export type TextStyleProps = {
    bold?:string;
    fontSize?:string;
    color?:string;
    padding?:string;
}

export type tableDataValuesType = {
    state:string;
    timestamp:string;
    hub?:string;
}

export type currentStatus = {
    state:string;
    timestamp:string;
  }
  
export type trackingDataTypes = {
    CurrentStatus:currentStatus;
    PromisedDate:string;
    TrackingNumber:string;
    TrackingURL:string;
    SupportPhoneNumbers:string[];
    TransitEvents:currentStatus[];
}


export interface ParentProps {
    children?: React.ReactNode;
  }

export interface contextValueTypes {
    contextValue:trackingDataTypes;
    setContextValue:React.Dispatch<
    React.SetStateAction<trackingDataTypes>>
}



