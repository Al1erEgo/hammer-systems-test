import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Users from './Users';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users: Users,
});

export default reducers;