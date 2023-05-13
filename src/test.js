import styled from "styled-components";

export const Item =  styled.li `

padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display:flex;
  align-items:center;
  justify-content:space-between;

  p{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : " ")};
    color:${(props) => (props.checked ? "green"  : "tomato")};


    width:50%;
    overflow-wrap:break-word;
    word-wrap:break-word;
    word-break:break-word;
 }
`

