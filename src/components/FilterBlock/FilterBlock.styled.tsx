import styled from '@emotion/styled';

export const FilterContainer = styled.div`
    width: 60%;
    min-width: 300px;
    max-width: 820px;
    height: min-content;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    flex-flow: wrap;
    box-shadow: inset 1px 1px 5px grey;
    margin: 20px auto;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        width: 0px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    background: gainsboro;
`;

export const FilterLeftSubContainer=styled.div`
    margin: auto;
    display: block;
    width: 250px;
`;

export const FilterRightSubContainer=styled.div`
    margin: auto;
    display: block;
    width: 250px;
`;

export const Label = styled.div`
    margin-left: 10px;
`;

export const FilterButtonBlock = styled.div`
    display: flex;
    margin: 10px;
    width: auto;
`;

export const FilterButton = styled.label<{checked:boolean}>`
    input[type=radio]{
        position: absolute;
        left: -9999px;
    }
    span {
        display: block;
        padding: 5px 15px;
        border: 1px solid grey;
        border-radius: 5px;
        margin-right: 3px;
        cursor: pointer;
        border-color: ${props => props.checked? 'indigo': 'grey'};
        background: ${props => props.checked? 'indigo': 'white'};
    }

    span:hover{
        transition: 0.5s linear;
        background: indigo;
        border-color: red;
    }

`;

export const FilterSearchBlock = styled.div`
    height: 30px;
    margin-left: 10px;
    display: inline-flex;

    input[type=text]{
        background: transparent;
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    input:focus{
        outline: none;
        border: 1px solid indigo;
        background: white;
    }

    .language{
        margin-left: 5px;
        display: inline-flex;
        height: 25px;
        width: min-content;

        input{
            margin: 0px 5px;
        }
        label{
            margin: 0px 5px;
        }
    }
`