import React, { memo, useEffect} from 'react';
import { Flex,HeaderText } from "../styled";

const Header = () => {
  return(

  <Flex 
    justify="space-between" 
    background="#f7f7f7"
    padding="5px 20px"
    align="center">

    <Flex>
      <img src = "https://bosta.co/wp-content/uploads/2019/08/Component.svg" alt="bosta.co"/>
    </Flex>

    <Flex 
      justify="space-between">

        <HeaderText>الرئيسية</HeaderText>
        <HeaderText>الاسعار</HeaderText>
        <HeaderText>المبيعات</HeaderText>

     </Flex>

     <Flex>
       <HeaderText>تتبع شحنتك</HeaderText>
       <HeaderText>تسجل الدخول</HeaderText>
    </Flex>

  </Flex>
  );
};

export default memo(Header);
