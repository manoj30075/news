const initialState = {
    news_items: [],
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return { ...state, news_items: action.payload };
        default:
            return state;
    }
};

export default newsReducer;
