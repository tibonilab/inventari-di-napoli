export const SEARCH_INDEXES = [
    { label: 'Composers', value: 'composer_ss' },
    { label: 'Intepreters', value: 'interpreter_ss' },
    { label: 'Places', value: 'place_s' },
    { label: 'Series', value: 'series_s' },
];

export const BROWSE_INDEXES = [
    { label: 'Composers', value: 'composer_ss' },
    { label: 'Intepreters', value: 'interpreter_ss' },
    { label: 'Dates', value: 'year_i' },
    { label: 'Places', value: 'place_s' },
    { label: 'Series', value: 'series_s' },
];

export const DEFAULT_FACETS = [
    'composer_ss', 
    'interpreter_ss', 
    'place_s', 
    'collection_s', 
    'series_s'
];

export default {
    SEARCH_INDEXES,
    BROWSE_INDEXES,
    DEFAULT_FACETS
};