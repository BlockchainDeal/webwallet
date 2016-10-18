import { riot, template, Element } from '../riot-ts';
import store, { ApplicationState } from '../../model/store';
import HomePendingTemplate from './pending.html!text';
import AndamanService from '../../model/andaman-service';
import { pendingActions } from '../../model/pending/actions';
import { PENDING } from '../../model/action-types';
import { getDisplayDate, strimString } from '../../model/utils';
import { TAB } from '../../model/pending/types';

@template(HomePendingTemplate)
export default class HomePending extends Element {
    private fromDateObject = null;
    private toDateObject = null;
    private paginationObject = null;
    private currentActiveTabId = 2;
    /**
     * Flag for reset Pagination
     * + true when change Tab or reload data
     * + false when navigate to another page
     */
    private resetPagination = false;
    private AvatarServer = AndamanService.AvatarServer;
    private DATE_PICKER_FORMAT: string = "M dd, yyyy";
    private ONE_MONTH: number = 30 * 24 * 60 * 60 * 1000;
    private timeZone = null;
    private getDisplayDate = getDisplayDate;
    private strimString = strimString;
    private TAB = TAB;
    private tabs = store.getState().pendingData.tabs;
    private money_requests = [];

    mounted() {
        var state = store.getState();
        this.timeZone = state.userData.user.timezone;
        store.subscribe(this.onApplicationStateChanged.bind(this));
        this.initDatePickers();
        this.loadData();
    }

    initDatePickers() {
        var state = store.getState();
        if (!this.fromDateObject) {
            this.fromDateObject = $("#pendingFromDate").parent().datepicker({
                format: this.DATE_PICKER_FORMAT,
                autoclose: true
            });
        }

        if (!this.toDateObject) {
            this.toDateObject = $("#pendingToDate").parent().datepicker({
                format: this.DATE_PICKER_FORMAT,
                autoclose: true
            });
        }

        this.fromDateObject.datepicker('setDate', new Date(state.userData.user.created_ts));
        this.toDateObject.datepicker('setDate', '-0d');

        // Auto set date range validation
        this.fromDateObject.datepicker('setStartDate', new Date(state.userData.user.created_ts));
        this.fromDateObject.datepicker('setEndDate', this.toDateObject.datepicker('getDate'));
        this.toDateObject.datepicker('setStartDate', this.fromDateObject.datepicker('getDate'));
        this.toDateObject.datepicker('setEndDate', '+0d');

        // Add date range validation on change
        this.fromDateObject.on('changeDate', selectedDate => {
            this.toDateObject.datepicker('setStartDate', selectedDate.date);
        });
        this.toDateObject.on('changeDate', selectedDate => {
            this.fromDateObject.datepicker('setEndDate', selectedDate.date);
        });
    }

    getPendingRequestStatus(status, type): string {
        switch (status) {
            case 0: return (type == 1 ? 'Awaiting Acceptance' : 'Pending');
            case 1: return 'Paid';
            case 2: return 'Denied';
            case 3: return 'Cancelled';
            default: return '';
        }
    }

    buildPagination() {
        if (this.resetPagination) {
            let state = store.getState();
            let {total_money_reqs, page_size} = state.pendingData;

            this.paginationObject = $(() => {
                $('.txn-pagination').pagination({
                    items: total_money_reqs,
                    itemsOnPage: page_size,
                    cssStyle: 'light-theme',
                    onPageClick: this.loadData
                });
            });
        }
    }

    onApplicationStateChanged() {
        var state = store.getState();
        var data = state.pendingData;
        var type = state.lastAction.type;

        if (type == PENDING.GET_MORE_REQUEST_SUCCESS) {
            this.buildPagination();
            this.money_requests = data.money_requests;
            this.tabs = data.tabs;
        } else if (type == PENDING.SET_ACTIVE_TAB) {
            let activeTab = data.tabs.filter((tab) => {
                return tab.isActive;
            })[0];

            let type = activeTab ? activeTab.id : 2;
            this.currentActiveTabId = type;
            this.loadData();
        }
        this.update();
    }

    loadData = (pageNumber?, event?) => {
        if (!pageNumber) {
            this.resetPagination = true;
            pageNumber = 1;
        } else {
            this.resetPagination = false;
        }

        let data = store.getState().pendingData;

        let pageSize = data.page_size;
        let fromDateTmp = this.fromDateObject.datepicker('getDate');
        let fromDate = new Date(fromDateTmp.setHours(0, 0, 0, 0)).toISOString();
        let toDateTmp = this.toDateObject.datepicker('getDate');
        let toDate = new Date(toDateTmp.setHours(23, 59, 59, 999)).toISOString();

        let pageSettings = {
            type: this.currentActiveTabId,
            date_from: fromDate,
            date_to: toDate,
            start: (pageNumber - 1) * pageSize,
            size: pageSize,
            status: [0]
        };

        store.dispatch(pendingActions.getMoreRequest(pageSettings));
    }

    onShowButtonClick(event: Event) {
        this.loadData();
    }

    onShowAllButtonClick(event: Event) {
        this.initDatePickers();
        this.loadData();
    }

    onTabItemClick(event: Event1) {
        event.preventDefault();
        event.stopPropagation();
        store.dispatch(pendingActions.setActiveTab(event.item.tabItem.id));
    }

    acceptRequest(event: Event1) {
        riot.mount('#confirm-send', 'accept-money-request', {
            uid: event.item.sender,
            amount: event.item.amount,
            receive_id: event.item.id,
            sender_email: event.item.sender_email
        });
    }

    rejectRequest(event: Event1) {
        riot.mount('#confirm-send', 'reject-money-request', {
            request_id: event.item.id,
            sender: event.item.sender_email,
            sendAddr: {
                profile_pic_url: event.item.sender_profile_pic_url,
                display_name: event.item.sender_display_name,
                username: event.item.sender,
                email: event.item.sender_email
            }
        });
    }
}

interface Event1 extends Event {
    item: any;
}