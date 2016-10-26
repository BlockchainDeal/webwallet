import { riot, template, Element } from '../riot-ts';
import store, { ApplicationState } from '../../model/store';
import HomeContactsTemplate from './contacts.html!text';
import AndamanService from '../../model/andaman-service';
import { contactsActions } from '../../model/contacts/actions';
import { CONTACTS } from '../../model/action-types';
import { strimString } from '../../model/utils';
import { FCEvent } from '../../model/types';

export const PAGE_SIZE = 10;
const ACTION_SEND = 0;
const ACTION_REQUEST = 1;

@template(HomeContactsTemplate)
export default class HomeContacts extends Element {
    private paginationObject = null;
    /**
     * Flag for reset Pagination
     * + true when change Tab or reload data
     * + false when navigate to another page
     */
    private resetPagination = false;
    private AvatarServer = AndamanService.AvatarServer;
    private contacts = [];
    private contactUids = [];
    private currentPage = 1;
    /**
     * do actionSelected with contact: Send money or Request money
     */
    private static actionSelected = 0;

    mounted() {
        let state = store.getState();
        store.subscribe(this.onApplicationStateChanged.bind(this));
        this.prepareContactUids();
    }

    buildPagination() {
        if (this.resetPagination) {
            let state = store.getState();
            let {total_money_reqs} = state.pendingData;

            this.paginationObject = $(() => {
                $('.txn-pagination').pagination({
                    items: total_money_reqs,
                    itemsOnPage: PAGE_SIZE,
                    cssStyle: 'light-theme',
                    onPageClick: this.prepareContactUids
                });
            });
        }
    }

    onApplicationStateChanged() {
        let state = store.getState();
        let data = state.contactsData;
        let type = state.lastAction.type;

        if (type == CONTACTS.GET_ROSTER_SUCCESS) {
            this.contactUids = state.lastAction.data.roster.subs.map(item => {
                return item.bare_uid;
            });
            this.loadData();
        } else if (type == CONTACTS.GET_USERS_BY_UID_SUCCESS) {
            this.buildPagination();
            this.contacts = data.contacts;
        } else if (type == CONTACTS.REMOVE_USER_SUCCESS) {
            this.prepareContactUids();
        } else if (type == CONTACTS.GET_WALLETS_BY_EMAIL_SUCCESS) {
            if (HomeContacts.actionSelected == ACTION_REQUEST) {
                riot.mount('#confirm-send', 'contact-request-money', {
                    sendAddr: data.contactWallet
                });
            } else if (HomeContacts.actionSelected == ACTION_SEND) {
                riot.mount('#confirm-send', 'contact-send-money', {
                    sendAddr: data.contactWallet
                });
            }
        }

        this.update();
    }

    loadData() {
        let pageSettings = {
            uids: this.contactUids,
            start: (this.currentPage - 1) * PAGE_SIZE,
            size: PAGE_SIZE
        };
        store.dispatch(contactsActions.getUsersByUid(pageSettings));
    }

    prepareContactUids = (pageNumber?, event?) => {
        if (!pageNumber) {
            this.resetPagination = true;
            pageNumber = 1;
        } else {
            this.resetPagination = false;
        }
        this.currentPage = pageNumber;

        let params = {
            subs_start: (pageNumber - 1) * PAGE_SIZE,
            subs_size: PAGE_SIZE,
            sent_start: -1,
            sent_size: 0,
            recv_start: -1,
            recv_size: 0
        };

        store.dispatch(contactsActions.getRoster(params));
    }

    removeContact(event: FCEvent) {
        riot.mount('#confirm-send', 'confirm-dialog', {
            title: 'Delete contact',
            message: 'Are you sure you want to delete this contact?',
            callback: function (result) {

                if (result) {
                    store.dispatch(contactsActions.removeUser(event.item.email));
                }
            }
        });
    }

    requestForm(event: FCEvent) {
        HomeContacts.actionSelected = ACTION_REQUEST;
        let account = {
            email: event.item.email,
            start: 0,
            size: 1
        };
        store.dispatch(contactsActions.getWalletsByEmail(account));
    }

    sendForm(event: FCEvent) {
        HomeContacts.actionSelected = ACTION_SEND;
        let account = {
            email: event.item.email,
            start: 0,
            size: 1
        };
        store.dispatch(contactsActions.getWalletsByEmail(account));
    }
}
