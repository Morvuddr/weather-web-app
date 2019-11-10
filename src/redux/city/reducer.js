import { CITY_LOADING, CITY_LOADING_SUCCESS, CITY_LOADING_ERROR} from './actionTypes';

const initialState = {
    isLoading: true,
    error: false,
    weather: {},
};

export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case CITY_LOADING: {
            const { isLoading } = action.payload;
            return {
                ...state,
                isLoading,
            };
        }
        case CITY_LOADING_SUCCESS: {
            const { isLoading, error, weather } = action.payload;
            return {
                ...state,
                isLoading,
                error,
                weather,
            };
        }
        case CITY_LOADING_ERROR: {
            const { isLoading, error } = action.payload;
            return {
                ...state,
                isLoading,
                error,
            };
        }
        default: {
            return state;
        }
    }
}