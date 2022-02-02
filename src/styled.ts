import styled from "styled-components"
import { FlexStyleProps, TextStyleProps } from "./interface"; 
import { Layout, Input, Table } from 'antd';

const { Content } = Layout;

const { Search } = Input;

export const Flex = styled.div<FlexStyleProps>`
 display:flex;
 justify-content:${props => props.justify};
 flex-direction:${props => !props.column ? "row" : "column"};
 align-items:${props => props.align};
 padding:${props => props.padding};
 margin:${props => props.margin};
 flex-wrap: wrap;
 background-color:${props => props.background};
 border:${props => !!props.bordered ? "1px solid #f7f5f5" : "none"};
 width:${props => props.width};
 direction:${props => props.direction};
 border-radius:${props => !!props.bordered ? "5px" : "none"};
 .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button{
    border-radius:20px;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child{
    background-color:#fff;
  }
  .ant-steps-dot .ant-steps-item-content, .ant-steps-dot.ant-steps-small .ant-steps-item-content{
    width:auto;
  }
`;

export const Text = styled.p<TextStyleProps>`
  font-size: ${props => !!props.fontSize ? props.fontSize : "22px"};
  color:${props => !!props.color ? props.color : "#686868e3"};
`
export const HeaderText = styled(Text)<TextStyleProps>`
  font-weight:bold;
  padding:${props => props.padding ? props.padding : "20px 45px"};
  margin:0px
`
export const MainLayout =  styled(Layout)`
  background-color:unset;
  margin:0 auto;
  direction:rtl;
`
export const Container = styled(Content)`
  margin:0 auto;
  width:88%;
`

export const SearchInput  = styled(Search)`
.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
  border: none;
  background-color: #fff;
  }
.ant-input-group > .ant-input:first-child {
  border-radius:20px;
  margin:0px 5px;
}
.ant-btn-primary, .ant-btn-primary:hover, .ant-btn-primary:focus{
  border-color: #ff0000;
  background: #ff0000;
}
`
export const TableContainer = styled(Table)`
.ant-table table, .ant-table-thead > tr > th {
    text-align:right;
    font-size:16px;
  }
`
export const Card = styled(Flex)`
  width:350px;
  border-radius:5px;
  border:1px solid #f7f5f5;
  padding:45px 20px;
  margin:5px 0px;
  background-color:${props => props.background};
  @media (max-width: 480px) {
    width:180px;
  }

  @media (max-width: 768px) {
    width:250px;
  }
`
export const CardImage = styled.img`
  position:relative;
   width: calc(100% - 18px);
`