import React, {memo, useContext, useMemo } from 'react';
import TrackingContext from "../context/context";
import { Button } from 'antd';
import { TRANSLATED_API_TABLE_DATA, columns } from "../constants"
import { Flex, HeaderText, TableContainer, Card, Text, CardImage } from "../styled";
import {tableDataValuesType} from "../interface"

const TableDetails = () => {
    // @ts-ignore
    const { contextValue } = useContext(TrackingContext);

    const data = useMemo(()=>{
        if(!!contextValue){
            const{ TrackingNumber } = contextValue;
            const dataSourceArr = TRANSLATED_API_TABLE_DATA.filter(key=> key.tracking_no === TrackingNumber )
            return dataSourceArr[0].tracking_details
          }   
    },[contextValue]);

  return(
    <Flex justify="space-around">
     {!!data ? 
     <>
    <Flex
      column={true}
      align="flex-start"
      width="70%">

        <HeaderText
          padding="45px 2px"
          >
            تفاصيل الشحنة
       
        </HeaderText>

          <TableContainer
            columns={columns}
            pagination={false}
            dataSource={data} 
            rowKey="rowKey"
          />
      </Flex>
        
      <Flex
        column={true}
        align="flex-start">

         <HeaderText
          padding="45px 2px"
          >
            عنوان التسليم

          </HeaderText>

        <Card background="#FAFAFA">
            <Text>
              العبور الحي التاسع بجوار مول الياسمين
            </Text>
        </Card>

        <Card>
          <CardImage
            src={require('../assests/images/problem.jpg')}/>
          <Text>
              هل يوجد مشكلة في شحنتك؟
          </Text>

          <Button 
            size="large" 
            shape="round" 
            type="primary"
            block
            danger
            >
              <Text
              fontSize="20px"
              color="#fff">
                   الابلاغ عن مشكلة
              </Text>
            </Button>

          </Card>
        </Flex>
            </>  
        :null}

  
    </Flex>
  );
};

export default memo(TableDetails);
