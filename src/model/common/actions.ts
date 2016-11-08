import { COMMON } from '../action-types';
import CommonService from './common-service';
import store from '../../model/store';

export const commonActions = {
    toggleLoading(isLoading) {
        return { type: COMMON.TOGGLE_LOADING, data: isLoading };
    },
    getWalletsByEmail(params) {
        return (dispatch) => {
            CommonService.singleton().getWalletsByEmail(params).then((resp: any) => {
                if (resp.rc == 1 && resp.results.length > 0) {
                    dispatch(commonActions.getWalletsByEmailSuccess(resp));
                } else {
                    dispatch(commonActions.getWalletsByEmailFailed(resp));
                }
            });
        };
    },
    getWalletsByEmailSuccess(resp) {
        return { type: COMMON.GET_WALLETS_BY_EMAIL_SUCCESS, data: resp };
    },
    getWalletsByEmailFailed(resp) {
        return { type: COMMON.GET_WALLETS_BY_EMAIL_FAILED, data: resp };
    },

    addListeners() {
        CommonService.singleton().onTxAdded(commonActions.onTxAdded);
        CommonService.singleton().onSessionExpired(commonActions.onSessionExpired);
        CommonService.singleton().onBeRequested(commonActions.onBeRequested);
        CommonService.singleton().onRequestStateChanged(commonActions.onRequestStateChanged);
    },

    onTxAdded(resp) {
        store.dispatch({type: COMMON.ON_NEW_TX_ADDED, data: resp });
        store.dispatch({type: COMMON.NEED_UPDATE_BALANCE, data: resp });
    },

    onSessionExpired(resp) {
        console.log('++++++++++++++++++++++++++ babv ON_SESSION_EXPIRED');
        store.dispatch({ type: COMMON.ON_SESSION_EXPIRED, data: resp });
    },

    onBeRequested(resp) {
        store.dispatch({ type: COMMON.ON_BE_REQUESTED, data: resp });
    },

    onRequestStateChanged(resp) {
        store.dispatch({ type: COMMON.ON_REQUEST_STATE_CHANGED, data: resp });
    }

};