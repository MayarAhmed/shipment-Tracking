import React, {memo, useContext, useMemo, useCallback} from 'react';
import { Steps, Input } from 'antd';
import { ShopOutlined , SolutionOutlined, ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons';
import TrackingContext from "../context/context";
import { Flex,HeaderText,Text, SearchInput } from "../styled";

const { Step } = Steps;
const { Search } = Input;
const TrackingDetails = () => {
// @ts-ignore
const { contextValue,checkParam } = useContext(TrackingContext);

const onSearch = useCallback((value:string)=>{
  checkParam(value);
},[contextValue,checkParam]) 

let currentState = -1;

 const stepStatus = useMemo(()=>{
   if(!!contextValue){
     const{ CurrentStatus } = contextValue;
     const stateValue = CurrentStatus.state;
     switch (stateValue) {
       case "DELIVERED":
        currentState = 4;
         break;
       case "WAITING" :
        currentState = 3;
         break;
       case "IN STORE" :
        currentState = 2;
         break;
         default:
        currentState = -1;
     }
     return currentState;
   }
 },[onSearch,contextValue])

 const currentStatus = !!stepStatus ? stepStatus : currentState;

  return(
    <Flex
      column={true}
      align="flex-start"
      >
      <Flex 
        width="30%"
        margin="20px 0px">
          
        <SearchInput 
            placeholder="ادخل رقم الشحنة" 
            onSearch={onSearch} 
            enterButton
            size="large" 
         />
       </Flex>

      <Flex 
        bordered
        padding="15px"
        margin="10px 0px"
        width="100%"
        direction="ltr">

      <Steps current={currentStatus}>
        <Step  title="انشاء الشحنة" icon={<SolutionOutlined />} />
        <Step  title="الاستلام من التاجر" icon={<ShopOutlined  />} />
        <Step  title="خرجت للتسليم" icon={<ShoppingCartOutlined  />} />
        <Step  title="تم التسليم" icon={<SmileOutlined />} />
      </Steps>
   </Flex>
 </Flex>
  )
}

export default memo(TrackingDetails)