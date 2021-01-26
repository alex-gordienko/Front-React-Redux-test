import React from 'react';
import {ILanguage} from './language.type';

export const russianLang:ILanguage={
    label:{
        sortLabel: 'Сортировать по...',
        viewLabel: 'Отобразить в виде...',
    },
    buttonsSort:{
        buttonID:'ID',
        buttonAge:'Возрасту',
        buttonName:'Имени',
        buttonDirectionUp:'По возрастанию',
        buttonDirectionDown:'По убыванию'
    },
    buttonsView:{
        buttonTable:'Таблицы',
        buttonPreview:'Предпросмотра'
    },
    otherElements:{
        searchPlaceholder:'Поиск...',
        ageUser:'лет'
    }
}

export const englishLang:ILanguage={
    label:{
        sortLabel: 'Sort by...',
        viewLabel: 'View on...',
    },
    buttonsSort:{
        buttonID:'ID',
        buttonAge:'Age',
        buttonName:'Name',
        buttonDirectionUp:'Ascending',
        buttonDirectionDown:'Descending'
    },
    buttonsView:{
        buttonTable:'Table',
        buttonPreview:'Preview'
    },
    otherElements:{
        searchPlaceholder:'Search...',
        ageUser:'years'
    }
}

const LanguageContext = React.createContext(russianLang)
export default LanguageContext