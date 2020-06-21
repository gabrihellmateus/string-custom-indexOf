import {combineReducers, createStore} from 'redux'
import {HeaderReducer} from '../containers/header/redux/HeaderReducer'
import {GistsReducer} from '../containers/gists/redux/GistsReducer'
import {LanguagesReducer} from '../shared/components/languages/LanguagesReducer'
import {SetThemeReducer} from '../shared/components/set-theme/redux/SetThemeReducer'

const reducers = combineReducers({
  gists: GistsReducer,
  personality: HeaderReducer,
  language: LanguagesReducer,
  theme: SetThemeReducer
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
