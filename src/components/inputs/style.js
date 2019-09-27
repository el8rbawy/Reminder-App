import styled from 'styled-components';

export const Form = styled.form`
   > input:first-of-type {
      padding: 10px;
      margin-bottom: 15px;
      width: 100%;
      outline: none;
      border: 1px solid rgb(224, 224, 224);
      background-color: transparent;
      color: rgb(224, 224, 224);
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   }
   > span {
      color: #fff;
      margin-bottom: 5px;
      background-color: #df3a3a;
      padding: 5px 10px;
      font-size: .9rem;
      display: block;
   }
`,
Buttons = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 15px;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

   button {
      width: 50%;
      border: none;
      padding: 10px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      color: #fff;
      outline: none;

      &:first-of-type {
         background-color: #00cc44;
         &:hover {
            background-color: #00b33c;
         }
      }
      &:last-of-type {
         background-color: #df3a3a;
         &:hover {
            background-color: #c52020;
         }
      }
      span {margin-left: 10px;}
   }
`,
CopyRight = styled.div`
   text-align: center;
   font-size: 0.9rem;
   margin-top: 15px;

   span {
      text-decoration: underline;
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:hover {
         color: #ccc;
      }
   }
`