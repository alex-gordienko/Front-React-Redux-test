import React, { useContext, useRef } from 'react'
import { IFullDataUser, IView } from '../../../App.types';

import { ILanguage } from '../../../language/language.type';
import LanguageContext from '../../../language/language';

import {ReactComponent as LikeIcon} from './like.svg';

import {
    UserRow, 
    Delimeter,
    LeftRowBlock, 
    CenterRowBlock, 
    RightRowBlock, 
    UserPreviewContainer,
    UserPreviewLeftBlock,
    UserPreviewRightBlock,
    UserPreviewHeaderBlock,
    UserPreviewBodyBlock
} from './User.styled';


interface IUser{
    display: IView;
    userData: IFullDataUser;
    onlike: (updatedUser:IFullDataUser)=>void;
}

const User = ({display, userData, onlike}:IUser)=>{
    const postContainerRef = useRef<HTMLDivElement>(null);
    const language = useContext<ILanguage>(LanguageContext)

    const onLike =(user: IFullDataUser)=>{
        user.favourite= user.favourite== true? false: true;
        onlike(user);
    }

    return display.view=='table'?(
            <UserRow>
                <LeftRowBlock>
                    <div className='avatar'>
                        <img src={'/assets/images/'+userData.image+'.svg'} alt='avatar'/>
                    </div>
                    <div className='name'>
                        {userData.name}
                    </div>
                </LeftRowBlock>
                <CenterRowBlock>{userData.age} {language.otherElements.ageUser}</CenterRowBlock>
                <RightRowBlock>
                    <div className='phone'>
                    {userData.phone}
                    </div>
                    <div className='rate'>
                        <LikeIcon
                            fill={userData.favourite? 'indigo': 'transparent'}
                            width='1em'
                            height='1em'
                            onClick={()=>onLike(userData)}
                        />
                    </div>
                </RightRowBlock>
            </UserRow>
    ):(
        <UserPreviewContainer ref={postContainerRef} isContainVideo={userData.video? true: false}>
            <UserPreviewLeftBlock parentWidth={postContainerRef.current?.offsetWidth}>
                <UserPreviewHeaderBlock>
                    <div className='avatar'>
                        <img src={'/assets/images/'+userData.image+'.svg'} alt='avatar'/>
                    </div>
                    <div className='name'>
                        {userData.name}
                    </div>
                    <div className='rate'>
                        <LikeIcon
                            fill={userData.favourite? 'indigo': 'transparent'}
                            width='1em'
                            height='1em'
                            onClick={()=>onLike(userData)}
                        />
                    </div>
                </UserPreviewHeaderBlock>
                <UserPreviewBodyBlock>
                    <p>{userData.age} лет</p>
                    <p>{userData.phone}</p>
                    <p>{userData.phrase}</p>
                </UserPreviewBodyBlock>
            </UserPreviewLeftBlock>
            
            {userData.video?
            (
                <UserPreviewRightBlock parentWidth={postContainerRef.current?.offsetWidth}>
                    <video className='videoBlock' controls src={'/assets/videos/'+userData.video+'.mp4'}/>
                </UserPreviewRightBlock>
            ):null
            }
        </UserPreviewContainer>
    )
}

export default User