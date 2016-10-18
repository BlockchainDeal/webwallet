import { PENDING } from '../action-types';
import { TAB } from './types';

var homeTabs = [
    { id: TAB.INCOMING, name: 'Incoming Requests', shortName: 'Incoming', isActive: true },
    { id: TAB.OUTGOING, name: 'Outgoing Requests', shortName: 'Outgoing', isActive: false }
]

export default function pendingReducer(state = { txns: [], total_txns: 0, page_size: 5, tabs: homeTabs, txn_detail: {} }, action) {
    switch (action.type) {
        case PENDING.SET_ACTIVE_TAB:
            var oldList = state.tabs;
            var newList = oldList.map((tab) => {
                tab.isActive = (tab.id == action.data);
                return tab;
            });
            return Object.assign({}, state, { tabs: newList });
        case PENDING.GET_MORE_REQUEST_SUCCESS:
            var money_requests = action.data.money_requests || [];
            return Object.assign({}, state, { money_requests: money_requests, total_money_reqs: action.data.total_money_reqs });
        default:
            return state;
    }
}