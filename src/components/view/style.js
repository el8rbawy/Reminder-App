import styled from 'styled-components';

export const UL = styled.ul`
   width: 100%;
   word-wrap: break-word;

   li {
      position: relative;
      list-style: none;
      background-color: #fff;
      color: #222;
      padding: 15px;
      margin-bottom: 30px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

      > span {
         display: block;
         transition: all .3s ease-in-out;

         &:first-of-type {
            margin-bottom: 10px;
         }
         &:nth-of-type(2) {
            font-size: 0.85rem;
            color: #999;
         }
         &:last-of-type {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: #df3a3a;
            color: #fff;
            padding: 2px 6px;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
               background-color: #c52020;
            }
         }
      }
   }
   @media (max-width: 767px) {
      margin-top: 50px;
   }
`,
Empty = styled.div`
   text-align: center;
   line-height: 382.47px;

   @media (max-width: 767px) {
      line-height: 1.5;
   }
`