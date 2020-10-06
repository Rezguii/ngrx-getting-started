import {createAction, createReducer, on} from "@ngrx/store";

export const productRedurcer = createReducer(
  {showProductCode: false},
  on(createAction('[Product] Toggle Product code'), state => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
