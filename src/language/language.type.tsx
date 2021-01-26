export interface ILanguage {
    label:{
      sortLabel: string;
      viewLabel: string;
    };
    buttonsSort:{
      buttonID: string;
      buttonName: string;
      buttonAge: string;
      buttonDirectionUp: string;
      buttonDirectionDown: string;
    };
    buttonsView:{
      buttonTable: string;
      buttonPreview: string;
    }
    otherElements:{
      searchPlaceholder: string;
      ageUser: string;
    }
  }