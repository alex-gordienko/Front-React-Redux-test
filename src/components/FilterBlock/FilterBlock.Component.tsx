import React, { useContext, useEffect, useRef, useState } from 'react';
import { IFilter, IView } from '../../App.types';
import { ILanguage } from '../../language/language.type';
import LanguageContext from '../../language/language';

import {
    Label, 
    FilterContainer, 
    FilterLeftSubContainer, 
    FilterRightSubContainer, 
    FilterButtonBlock, 
    FilterButton,
    FilterSearchBlock
} from './FilterBlock.styled'

interface IFilterBlock {
    initFilter: IFilter;
    initView: IView;
    onChangeFilter:(filter: IFilter)=>void;
    onChangeView: (view:IView)=> void;
    onSearchChange: (e: string)=> void;
    onLangChange: (e: boolean)=> void;
}

const FilterBlock = ({
    initFilter, 
    initView, 
    onChangeFilter, 
    onChangeView, 
    onSearchChange,
    onLangChange
}:IFilterBlock)=>{

    const language = useContext<ILanguage>(LanguageContext)
    console.log(initFilter);
    console.log(initView);

    const [inputValue, setInputValue] = useState(initFilter.searchedWord);

    const timerHandler = useRef<any>();

    return(
        <FilterContainer>
            <FilterLeftSubContainer>
                <Label>{language.label.sortLabel}</Label>
                <FilterButtonBlock>
                    <FilterButton checked={initFilter.sortBy==='id'}>
                        <span>{language.buttonsSort.buttonID}</span>
                        <input type='radio' name='filter' value='id'
                            onChange={()=>onChangeFilter({...initFilter, sortBy:'id'})}
                        />
                    </FilterButton>
                    <FilterButton checked={initFilter.sortBy==='name'}>
                        <span>{language.buttonsSort.buttonName}</span>
                        <input type='radio' name='filter' value='name'
                            onChange={()=>onChangeFilter({...initFilter, sortBy:'name'})}
                        />
                    </FilterButton>
                    <FilterButton checked={initFilter.sortBy==='age'} >
                        <span>{language.buttonsSort.buttonAge}</span>
                        <input type='radio' name='filter' value='age'
                            onChange={()=>onChangeFilter({...initFilter, sortBy: 'age'})}
                        />
                    </FilterButton>
                </FilterButtonBlock>

                <FilterButtonBlock>
                    <FilterButton checked={initFilter.direction==='up'} >
                        <span>{language.buttonsSort.buttonDirectionUp}</span>
                        <input type='radio' name='filter' value='up'
                            onChange={()=>onChangeFilter({...initFilter, direction:'up'})}
                        />
                    </FilterButton>
                    <FilterButton checked={initFilter.direction==='down'} >
                        <span>{language.buttonsSort.buttonDirectionDown}</span>
                        <input type='radio' name='filter' value='down'
                            onChange={()=>onChangeFilter({...initFilter, direction:'down'})}
                        />
                    </FilterButton>
                </FilterButtonBlock>    
            </FilterLeftSubContainer>
            
            <FilterRightSubContainer>
                <Label>{language.label.viewLabel}</Label>
                <FilterButtonBlock>
                    <FilterButton checked={initView.view==='table'} >
                        <span>{language.buttonsView.buttonTable}</span>
                        <input type='radio' name='view' value='table'
                            onChange={()=>onChangeView({...initView, view:'table'})}
                        />
                    </FilterButton>
                    <FilterButton checked={initView.view==='preview'} >
                        <span>{language.buttonsView.buttonPreview}</span>
                        <input type='radio' name='view' value='preview'
                            onChange={()=>onChangeView({...initView, view:'preview'})}
                        />
                    </FilterButton>
                </FilterButtonBlock>
                <FilterSearchBlock>
                    <input type='text' placeholder={language.otherElements.searchPlaceholder}
                        value={inputValue}  
                        autoFocus
                        onChange={(e)=>{
                            clearTimeout(timerHandler.current);
                            setInputValue(e.currentTarget.value);
                            const pendingValue = e.currentTarget.value;
                            timerHandler.current = setTimeout(()=>{
                                onSearchChange(pendingValue)
                            }, 1000)
                            
                        }}
                    />
                    <div className='language'>
                    <input type='checkbox' 
                        name='lang' 
                        checked={language.otherElements.searchPlaceholder=='Search...'}
                        onChange={(e)=>onLangChange(e.currentTarget.checked)}/>
                    <label htmlFor='lang'>English</label>
                    </div>
                </FilterSearchBlock> 
            </FilterRightSubContainer>

        </FilterContainer>
        
    )
}

export default FilterBlock