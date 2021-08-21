export interface SummaryResponseModel {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: [];
  totalNutrients: {
    ENERC_KCAL: {
      label: 'Energy';
      quantity: number;
      unit: UnitsModel;
    };
    FAT: {
      label: 'Fat';
      quantity: number;
      unit: UnitsModel;
    };
    FASAT: {
      label: 'Saturated';
      quantity: number;
      unit: UnitsModel;
    };
    FATRN: {
      label: 'Trans';
      quantity: number;
      unit: UnitsModel;
    };
    FAMS: {
      label: 'Monounsaturated';
      quantity: number;
      unit: UnitsModel;
    };
    FAPU: {
      label: 'Polyunsaturated';
      quantity: number;
      unit: UnitsModel;
    };
    CHOCDF: {
      label: 'Carbs';
      quantity: number;
      unit: UnitsModel;
    };
    FIBTG: {
      label: 'Fiber';
      quantity: number;
      unit: UnitsModel;
    };
    SUGAR: {
      label: 'Sugars';
      quantity: number;
      unit: UnitsModel;
    };
    PROCNT: {
      label: 'Protein';
      quantity: number;
      unit: UnitsModel;
    };
    CHOLE: {
      label: 'Cholesterol';
      quantity: number;
      unit: UnitsModel;
    };
    NA: {
      label: 'Sodium';
      quantity: number;
      unit: UnitsModel;
    };
    CA: {
      label: 'Calcium';
      quantity: number;
      unit: UnitsModel;
    };
    MG: {
      label: 'Magnesium';
      quantity: number;
      unit: UnitsModel;
    };
    K: {
      label: 'Potassium';
      quantity: number;
      unit: UnitsModel;
    };
    FE: {
      label: 'Iron';
      quantity: number;
      unit: UnitsModel;
    };
    ZN: {
      label: 'Zinc';
      quantity: number;
      unit: UnitsModel;
    };
    P: {
      label: 'Phosphorus';
      quantity: number;
      unit: UnitsModel;
    };
    VITA_RAE: {
      label: 'Vitamin A';
      quantity: number;
      unit: UnitsModel;
    };
    VITC: {
      label: 'Vitamin C';
      quantity: number;
      unit: UnitsModel;
    };
    THIA: {
      label: 'Thiamin (B1)';
      quantity: number;
      unit: UnitsModel;
    };
    RIBF: {
      label: 'Riboflavin (B2)';
      quantity: number;
      unit: UnitsModel;
    };
    NIA: {
      label: 'Niacin (B3)';
      quantity: number;
      unit: UnitsModel;
    };
    VITB6A: {
      label: 'Vitamin B6';
      quantity: number;
      unit: UnitsModel;
    };
    FOLDFE: {
      label: 'Folate equivalent (total)';
      quantity: number;
      unit: UnitsModel;
    };
    FOLFD: {
      label: 'Folate (food)';
      quantity: number;
      unit: UnitsModel;
    };
    FOLAC: {
      label: 'Folic acid';
      quantity: number;
      unit: UnitsModel;
    };
    VITB12: {
      label: 'Vitamin B12';
      quantity: number;
      unit: UnitsModel;
    };
    VITD: {
      label: 'Vitamin D';
      quantity: number;
      unit: UnitsModel;
    };
    TOCPHA: {
      label: 'Vitamin E';
      quantity: number;
      unit: UnitsModel;
    };
    VITK1: {
      label: 'Vitamin K';
      quantity: number;
      unit: UnitsModel;
    };
    WATER: {
      label: 'Water';
      quantity: number;
      unit: UnitsModel;
    };
  };
  totalDaily: {
    ENERC_KCAL: {
      label: 'Energy';
      quantity: number;
      unit: UnitsModel;
    };
    FAT: {
      label: 'Fat';
      quantity: number;
      unit: UnitsModel;
    };
    FASAT: {
      label: 'Saturated';
      quantity: number;
      unit: UnitsModel;
    };
    FATRN: {
      label: 'Trans';
      quantity: number;
      unit: UnitsModel;
    };
    FAMS: {
      label: 'Monounsaturated';
      quantity: number;
      unit: UnitsModel;
    };
    FAPU: {
      label: 'Polyunsaturated';
      quantity: number;
      unit: UnitsModel;
    };
    CHOCDF: {
      label: 'Carbs';
      quantity: number;
      unit: UnitsModel;
    };
    FIBTG: {
      label: 'Fiber';
      quantity: number;
      unit: UnitsModel;
    };
    SUGAR: {
      label: 'Sugars';
      quantity: number;
      unit: UnitsModel;
    };
    PROCNT: {
      label: 'Protein';
      quantity: number;
      unit: UnitsModel;
    };
    CHOLE: {
      label: 'Cholesterol';
      quantity: number;
      unit: UnitsModel;
    };
    NA: {
      label: 'Sodium';
      quantity: number;
      unit: UnitsModel;
    };
    CA: {
      label: 'Calcium';
      quantity: number;
      unit: UnitsModel;
    };
    MG: {
      label: 'Magnesium';
      quantity: number;
      unit: UnitsModel;
    };
    K: {
      label: 'Potassium';
      quantity: number;
      unit: UnitsModel;
    };
    FE: {
      label: 'Iron';
      quantity: number;
      unit: UnitsModel;
    };
    ZN: {
      label: 'Zinc';
      quantity: number;
      unit: UnitsModel;
    };
    P: {
      label: 'Phosphorus';
      quantity: number;
      unit: UnitsModel;
    };
    VITA_RAE: {
      label: 'Vitamin A';
      quantity: number;
      unit: UnitsModel;
    };
    VITC: {
      label: 'Vitamin C';
      quantity: number;
      unit: UnitsModel;
    };
    THIA: {
      label: 'Thiamin (B1)';
      quantity: number;
      unit: UnitsModel;
    };
    RIBF: {
      label: 'Riboflavin (B2)';
      quantity: number;
      unit: UnitsModel;
    };
    NIA: {
      label: 'Niacin (B3)';
      quantity: number;
      unit: UnitsModel;
    };
    VITB6A: {
      label: 'Vitamin B6';
      quantity: number;
      unit: UnitsModel;
    };
    FOLDFE: {
      label: 'Folate equivalent (total)';
      quantity: number;
      unit: UnitsModel;
    };
    FOLFD: {
      label: 'Folate (food)';
      quantity: number;
      unit: UnitsModel;
    };
    FOLAC: {
      label: 'Folic acid';
      quantity: number;
      unit: UnitsModel;
    };
    VITB12: {
      label: 'Vitamin B12';
      quantity: number;
      unit: UnitsModel;
    };
    VITD: {
      label: 'Vitamin D';
      quantity: number;
      unit: UnitsModel;
    };
    TOCPHA: {
      label: 'Vitamin E';
      quantity: number;
      unit: UnitsModel;
    };
    VITK1: {
      label: 'Vitamin K';
      quantity: number;
      unit: UnitsModel;
    };
    WATER: {
      label: 'Water';
      quantity: number;
      unit: UnitsModel;
    };
  };
  totalNutrientsKCal: {
    ENERC_KCAL: {
      label: 'Energy';
      quantity: number;
      unit: UnitsModel;
    };
    PROCNT_KCAL: {
      label: 'Calories from protein';
      quantity: number;
      unit: UnitsModel;
    };
    FAT_KCAL: {
      label: 'Calories from fat';
      quantity: number;
      unit: UnitsModel;
    };
    CHOCDF_KCAL: {
      label: 'Calories from carbohydrates';
      quantity: number;
      unit: UnitsModel;
    };
  };
}

export interface SummaryResponseModificationModel {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: [];
  totalNutrients: ModifiedNutrientsModel;
  totalDaily: ModifiedNutrientsModel;
  totalNutrientsKCal: {
    ENERC_KCAL: {
      label: 'Energy';
      quantity: number;
      unit: UnitsModel;
    };
    PROCNT_KCAL: {
      label: 'Calories from protein';
      quantity: number;
      unit: UnitsModel;
    };
    FAT_KCAL: {
      label: 'Calories from fat';
      quantity: number;
      unit: UnitsModel;
    };
    CHOCDF_KCAL: {
      label: 'Calories from carbohydrates';
      quantity: number;
      unit: UnitsModel;
    };
  };
}

export type UnitsModel = 'mg' | 'g' | 'kcal' | 'µg' | '%';

export interface SingleNutrientsModel {
  label: string;
  quantity: number;
  unit: UnitsModel;
}

export interface ModifiedNutrientsModel {
  '1- FATS': {
    header: {
      label: 'Fat';
      quantity: number;
      unit: UnitsModel;
    };
    related: SingleNutrientsModel[];
  };
  '2- CARBS': {
    header: {
      label: 'Carbs';
      quantity: number;
      unit: UnitsModel;
    };
    related: SingleNutrientsModel[];
  };
  '3- PROTEIN': {
    header: {
      label: 'Protein';
      quantity: number;
      unit: UnitsModel;
    };
    related: SingleNutrientsModel[];
  };
}

export interface SingleIngredientModel {
  '1- Ingredient': string;
  '2- Calories': number;
  '3- Weight': number;
}
