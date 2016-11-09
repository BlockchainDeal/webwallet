import { template } from '../riot-ts';
import BaseElement from '../base-element';
import store, { ApplicationState } from '../../model/store';
import { userActions } from '../../model/users/actions';
import HomeHeaderTemplate from './header.html!text';
import AndamanService from '../../model/andaman-service';
import { USERS } from '../../model/action-types';
import { COMMON } from '../../model/action-types';
import { decimalFormat } from '../../model/utils';
import { utcDateToLocal } from '../../model/utils';

@template(HomeHeaderTemplate)
export default class HomeHeader extends BaseElement {
    public userEmail: string = store.getState().userData.user.email;
    public avatarUrl: string = null;
    private balance = 0;
    private decimalFormat = decimalFormat;
    private static unsubscribe = null;

    mounted() {
        let state = store.getState();
        if (HomeHeader.unsubscribe) HomeHeader.unsubscribe();
        HomeHeader.unsubscribe = store.subscribe(this.onApplicationStateChanged.bind(this));
        store.dispatch(userActions.getBalance());

        let user = store.getState().userData.user;
        if (user.profile_pic_url) {
            this.avatarUrl = `${AndamanService.AvatarServer}${user.profile_pic_url}`;
        }
    }

    onApplicationStateChanged() {
        let state: ApplicationState = store.getState();
        let self = this;
        let message = '';
        let note = state.commonData.notificationData;

        switch (state.lastAction.type) {
            case USERS.GET_BALANCE_SUCCESS:
                this.balance = state.lastAction.data;
                break;
            case COMMON.NEED_UPDATE_BALANCE:
                setTimeout(function () {
                    store.dispatch(userActions.getBalance());
                    self.showTxnNotification();
                }, 2000);
                break;
            case COMMON.ON_SESSION_EXPIRED:
                message = 'Flashcoin terminated this session because you logged in from another place. We do not allow concurrent sessions for your own sake.';
                super.showError('', message, function () { document.location.href = '/'; });
                break;
            case COMMON.ON_REQUEST_STATE_CHANGED:
                self.showRequestNotification();
            case COMMON.ON_BE_REQUESTED:
                message = note.sender + " sent you a request for " + decimalFormat(note.amount) + " Flash Coin at " + utcDateToLocal(note.created_ts);
                $.notify(message, "success");
            default:
                break;
        }

        this.update();
    }

    showRequestNotification() {
        let state = store.getState();
        let note = state.commonData.notificationData;
        let message = null;

        switch (note.status) {
            case 1:
                message = "One request of yours has been paid";
                break;
            case 2:
                message = "One request of yours has been rejected";
                break;
            case 3:
                message = "A request sent to you has been cancelled";
                break;
            default:
                break;
        }

        if (message) {
            $.notify(message, "success");
        }
    }

    showTxnNotification() {
        let message = null;
        let state = store.getState();
        let note = state.commonData.notificationData;
        let user = state.userData.user;

        if (note.sender_email == store.getState().userData.user.email) {
            if (note.transaction_type == 'like') {
                message = "You have just liked and sent " + note.recipientEmail + " " + decimalFormat(note.amount) + " tokens as a reward";
            } else {
                message = "One of your fountain(s) has just dispensed " + decimalFormat(note.amount) + " tokens to " + note.recipientEmail;
            }
        } else {
            message = note.sender_email + " sent you " + decimalFormat(note.amount) + " Flash Coin";
        }

        $.notify(message, "success");

        //Mp3 sound audio HTML5
        var embed = '<audio id="audio"><source src="assets/sound/money.mp3" type="audio/mpeg"></audio>';
        $("#sound").html(embed);
    }

    onLogoutButtonClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        store.dispatch(userActions.logout());
    }


}