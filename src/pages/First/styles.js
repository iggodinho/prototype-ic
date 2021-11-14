import styled from "styled-components";
import {BsFillSquareFill} from 'react-icons/bs';
import {IoIosArrowDroprightCircle} from 'react-icons/io';





export const BgContainer=styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    padding: 10px;
    //margin-top: 40px;
    height:100vh;
`

export const TableContainer=styled.div`
    //width: 50%;
    //display: flex;
    //justify-content: center;

`

export const QuestionContainer=styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    //align-content: center;
    justify-content:space-between;
    //width: 80%;
    //height: 900px;
    //background-color: gray;
`

export const TitleContainer=styled.div`
    font-size: 36px;
    
    font-weight:bold;
    background-color: rgb(216,216,216);
    color:black;
    width: 70%;
    border: 1px solid #ccc;
    margin-bottom: 30px;
    padding: 10px 0;
`

export const GraphContainer=styled.div`
    display:flex;
    align-items:center;

`

export const LegendContainer=styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    
`

export const TitleDiv=styled.div`
    display: flex;
    align-items: center;
    
`

export const ColorIcon=styled(BsFillSquareFill)`
    height: 20px;
    width:20px;
    color:${props=>props.color};
    margin-right: 10px;
`

export const LegendLabel=styled.p`
    font-size:14px;
    text-align:center;
`

export const ArrowIcon=styled(IoIosArrowDroprightCircle)`
    height: 40px;
    width:40px;
    color:#8FBEFF;
    cursor: pointer;
    transform: ${props=>
    {return props.side==='left'?'rotate(180deg)':null}};
    &:hover{
        color:#475F80;
    }
`

export const ArrowContainer=styled.div`
    display:flex;
    align-items:center;
    margin-top: 30px;
`

export const ArrowTitle=styled.p`
    font-size:28px;
    font-weight:bold;
    margin: 0 10px;
`