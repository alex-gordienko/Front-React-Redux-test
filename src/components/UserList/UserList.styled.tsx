import styled from '@emotion/styled'

export const StyledUserList = styled.div`
    width: 60%;
    min-width: 300px;
    max-width: 820px;
    height: auto;
    max-height: 50vh;
    display: flex;
    flex-flow: wrap;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: inset 1px 1px 5px indigo;
    margin: 20px auto;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        width: 0px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    background: gainsboro;

    animation: show 1s 1;
    animation-fill-mode: forwards;
    animation-delay: 1s;
`;
