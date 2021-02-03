import React from 'react';
import User from './User';
import { IFullDataUser, IView } from '../../App.types'

import {StyledUserList} from './UserList.styled'

interface IUserList{
    data: IFullDataUser[];
    view: IView;
    onLike: (updatedUser:IFullDataUser)=>void;
}

const UserList = ({data, view, onLike}:IUserList)=>{
    
    return(
        <StyledUserList>
            {
            data.map((user:IFullDataUser, indx: number)=>{
                return (
                    <User key={indx} display={view} userData={user} onlike={onLike}/>
                )
                })
            }
        </StyledUserList>
    )
}

export default UserList