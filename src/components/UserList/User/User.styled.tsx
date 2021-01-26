import styled from '@emotion/styled'

export const UserRow = styled.div`
    display: inline-flex;
    width: 99%;
    background: white;
    margin: 1px auto;
    height: fit-content;
    border-radius: 5px;
    opacity:0;
    transition: 0.5s;
    animation: show 1s 1;
    animation-fill-mode: forwards;
    animation-delay: 1s;
`;



export const Delimeter = styled.hr`
    border: none;
    color: grey;
    background-color: grey;
    height: 1px;
    margin: 1px 15px 1px 15px;
`;

export const LeftRowBlock = styled.div`
    display: inline-flex;
    width: 200px;
    margin: 10px auto;

    .avatar{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background: grey;
    }
    .name{
        margin: auto 5px;
    }
`;

export const CenterRowBlock = styled.div`
    margin: auto;
`;

export const RightRowBlock = styled.div`
    display: inline-flex;
    width: 170px;
    margin: auto;

    .phone{
        width: 150px;
    }
    .rate{
        margin: auto 5px;
        height: min-content;
    }
`;

export const UserPreviewContainer = styled.div<{isContainVideo:boolean}>`
    margin: 5px auto;
    display: flex;
    flex-flow: wrap;
    border: 1px solid grey;
    border-radius: 5px;
    min-width: 290px;
    max-width: ${props => props.isContainVideo? '95%': '45%'};
    box-shadow: 2px 3px 4px indigo;
    background: white;
`;

export const UserPreviewLeftBlock = styled.div<{parentWidth:any}>`
    display: block;
    width: ${props => props.parentWidth<470? '95%': '250px'};
`;

export const UserPreviewRightBlock = styled.div<{parentWidth:any}>`
    display: block;
    width: ${props => props.parentWidth<470? '95%': '250px'};
    margin: auto 5px auto auto;
    height: auto;

    .videoBlock{
        width: 100%;
    }
`;

export const UserPreviewHeaderBlock = styled.div`
    display: flex;
    width: initial;
    margin: 10px 10px;

    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 15px;
        background: grey;
    }
    .name{
        margin: auto 20px;
    }
    .rate{
        margin: auto 5px auto auto;
        height: min-content;
    }
`;

export const UserPreviewBodyBlock = styled.div`
    margin: 0px 10px;
`;