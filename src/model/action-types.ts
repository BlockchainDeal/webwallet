export const COMMON = {
    TOGGLE_LOADING: 'COMMON.TOGGLE_LOADING',
    GET_WALLETS_BY_EMAIL_SUCCESS: 'COMMON.GET_WALLETS_BY_EMAIL_SUCCESS',
    GET_WALLETS_BY_EMAIL_FAILED: 'COMMON.GET_WALLETS_BY_EMAIL_FAILED',
    ON_NEW_TX_ADDED: 'COMMON.ON_NEW_TX_ADDED',
    ON_SESSION_EXPIRED: 'COMMON.ON_SESSION_EXPIRED',
    ON_BE_REQUESTED: 'COMMON.ON_BE_REQUESTED',
    ON_REQUEST_STATE_CHANGED: 'COMMON.ON_REQUEST_STATE_CHANGED',
    NEED_UPDATE_BALANCE: 'COMMON.NEED_UPDATE_BALANCE',
    NEED_UPDATE_CONTACT: 'COMMON.NEED_UPDATE_CONTACT',
    NEED_UPDATE_PENDING_REQUEST: 'COMMON.NEED_UPDATE_PENDING_REQUEST',
    ON_DISCONNECT: 'COMMON.ON_DISCONNECT',
    ON_CONNECT: 'COMMON.ON_CONNECT'
};

export const USERS = {
    SIGNUP_SUCCESS: 'USERS.SIGNUP_SUCCESS',
    SIGNUP_FAILED: 'USERS.SIGNUP_FAILED',
    SET_PASSWORD_SUCCESS: 'USERS.SET_PASSWORD_SUCCESS',
    SET_PASSWORD_FAILED: 'USERS.SET_PASSWORD_FAILED',
    SET_RECOVERY_KEY_SUCCESS: 'USERS.SET_RECOVERY_KEY_SUCCESS',
    SET_RECOVERY_KEY_FAILED: 'USERS.SET_RECOVERY_KEY_FAILED',
    LOGIN_SUCCESS: 'USERS.LOGIN_SUCCESS',
    LOGIN_FAILED: 'USERS.LOGIN_FAILED',
    LOGOUT: 'USERS.LOGOUT',
    SSO_LOGIN_SUCCESS: 'USERS.SSO_LOGIN_SUCCESS',
    SSO_LOGIN_FAILED: 'USERS.SSO_LOGIN_FAILED',
    CHECK_2FA_CODE_SUCCESS: 'USERS.CHECK_2FA_CODE_SUCCESS',
    CHECK_2FA_CODE_FAILED: 'USERS.CHECK_2FA_CODE_FAILED',
    NEED_VERIFY_GOOGLE_2FA: 'USERS.NEED_VERIFY_GOOGLE_2FA',
    GET_PROFILE_SUCCESS: 'USERS.GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILED: 'USERS.GET_PROFILE_FAILED',
    GET_MY_WALLETS_SUCCESS: 'USERS.GET_MY_WALLETS_SUCCESS',
    GET_MY_WALLETS_FAILED: 'USERS.GET_MY_WALLETS_FAILED',
    GET_BALANCE_SUCCESS: 'USERS.GET_BALANCE_SUCCESS',
    GET_BALANCE_FAILED: 'USERS.GET_BALANCE_FAILED',
    REMEMBER_ME: 'USERS.REMEMBER_ME',
    SAVE_ACCESS_TOKEN: 'USERS.SAVE_ACCESS_TOKEN',
    REMOVE_ACCESS_TOKEN: 'USERS.REMOVE_ACCESS_TOKEN',
    STORE_FOUNTAIN_SECRET: 'USERS.STORE_FOUNTAIN_SECRET',
    FORGOT_PASSWORD: 'USERS.FORGOT_PASSWORD'
};

export const ACTIVITIES = {
    SET_ACTIVE_TAB: 'ACTIVITIES.SET_ACTIVE_TAB',
    GET_MORE_TXN: 'ACTIVITIES.GET_MORE_TXN',
    GET_MORE_TXN_SUCCESS: 'ACTIVITIES.GET_MORE_TXN_SUCCESS',
    GET_MORE_TXN_FAILED: 'ACTIVITIES.GET_MORE_TXN_FAILED',
    GET_TXN_DETAIL: 'ACTIVITIES.GET_TXN_DETAIL',
    GET_TXN_DETAIL_SUCCESS: 'ACTIVITIES.GET_TXN_DETAIL_SUCCESS',
    NEED_UPDATE_ACTIVITIES: 'ACTIVITIES.NEED_UPDATE_ACTIVITIES',
    GET_TXN_DETAIL_FAILED: 'ACTIVITIES.GET_TXN_DETAIL_FAILED',
};

export const SEND = {
    CREATE_RAW_TXN: 'SEND.CREATE_RAW_TXN',
    CLEAR_FORM: 'SEND.CLEAR_FORM',
    SEND_TXN_SUCCESSFUL: 'SEND.SEND_TXN_SUCCESSFUL',
    SEND_TXN_FAILED: 'SEND.SEND_TXN_FAILED'
}

export const REQUEST = {
    REQUEST_MONEY: 'REQUEST.REQUEST_MONEY',
    REQUEST_MONEY_SUCCESS: 'REQUEST.REQUEST_MONEY_SUCCESS',
    REQUEST_MONEY_FAILED: 'REQUEST.REQUEST_MONEY_FAILED',
}

export const PENDING = {
    SET_ACTIVE_TAB: 'PENDING.SET_ACTIVE_TAB',
    NEED_UPDATE_PENDING_REQUESTS: 'PENDING.NEED_UPDATE_PENDING_REQUESTS',
    GET_MORE_REQUEST_SUCCESS: 'PENDING.GET_MORE_REQUEST_SUCCESS',
    GET_MORE_REQUEST_FAILED: 'PENDING.GET_MORE_REQUEST_FAILED',
    MARK_REJECTED_MONEY_REQUESTS_SUCCESS: 'PENDING.MARK_REJECTED_MONEY_REQUESTS_SUCCESS',
    MARK_REJECTED_MONEY_REQUESTS_FAILED: 'PENDING.MARK_REJECTED_MONEY_REQUESTS_FAILED',
    MARK_CANCELLED_MONEY_REQUESTS_SUCCESS: 'PENDING.MARK_CANCELLED_MONEY_REQUESTS_SUCCESS',
    MARK_CANCELLED_MONEY_REQUESTS_FAILED: 'PENDING.MARK_CANCELLED_MONEY_REQUESTS_FAILED',
    MARK_SENT_MONEY_REQUESTS_SUCCESS: 'PENDING.MARK_SENT_MONEY_REQUESTS_SUCCESS',
    CHANGE_REJECT_REQUEST_SUCCESS_DIALOG: 'PENDING.CHANGE_REJECT_REQUEST_SUCCESS_DIALOG',
    CHANGE_REJECT_REQUEST_FAILED_DIALOG: 'PENDING.CHANGE_REJECT_REQUEST_FAILED_DIALOG'
}

export const CONTACTS = {
    GET_ROSTER_SUCCESS: 'CONTACTS.GET_ROSTER_SUCCESS',
    GET_ROSTER_FAILED: 'CONTACTS.GET_ROSTER_FAILED',
    GET_USERS_BY_UID_SUCCESS: 'CONTACTS.GET_USERS_BY_UID_SUCCESS',
    GET_USERS_BY_UID_FAILED: 'CONTACTS.GET_USERS_BY_UID_FAILED',
    REMOVE_USER_SUCCESS: 'CONTACTS.REMOVE_USER_SUCCESS',
    REMOVE_USER_FAILED: 'CONTACTS.REMOVE_USER_FAILED',
    GET_WALLETS_BY_EMAIL_SUCCESS: 'CONTACTS.GET_WALLETS_BY_EMAIL_SUCCESS',
    GET_WALLETS_BY_EMAIL_FAILED: 'CONTACTS.GET_WALLETS_BY_EMAIL_FAILED'
}

export const PROFILE = {
    GET_FOUNTAIN_SUCCESS: 'PROFILE.GET_FOUNTAIN_SUCCESS',
    GET_FOUNTAIN_FAILED: 'PROFILE.GET_FOUNTAIN_FAILED',
    DISABLE_FOUNTAIN_SUCCESS: 'PROFILE.DISABLE_FOUNTAIN_SUCCESS',
    DISABLE_FOUNTAIN_FAILED: 'PROFILE.DISABLE_FOUNTAIN_FAILED',
    UPDATE_FOUNTAIN_SUCCESS: 'PROFILE.UPDATE_FOUNTAIN_SUCCESS',
    UPDATE_FOUNTAIN_FAILED: 'PROFILE.UPDATE_FOUNTAIN_FAILED',
    ENABLE_FOUNTAIN_SUCCESS: 'PROFILE.ENABLE_FOUNTAIN_SUCCESS',
    ENABLE_FOUNTAIN_FAILED: 'PROFILE.ENABLE_FOUNTAIN_FAILED',
    CONFIRM_2FA_CODE_SUCCESS: 'PROFILE.CONFIRM_2FA_CODE_SUCCESS',
    CONFIRM_2FA_CODE_FAILED: 'PROFILE.CONFIRM_2FA_CODE_FAILED',
    DISABLE_2FA_SUCCESS: 'PROFILE.DISABLE_2FA_SUCCESS',
    DISABLE_2FA_FAILED: 'PROFILE.DISABLE_2FA_FAILED',
    ENABLE_2FA_SUCCESS: 'PROFILE.ENABLE_2FA_SUCCESS',
    ENABLE_2FA_FAILED: 'PROFILE.ENABLE_2FA_FAILED',
    CHANGE_PASSWORD_SUCCESS: 'PROFILE.CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAILED: 'PROFILE.CHANGE_PASSWORD_FAILED',
    GET_SSO_KEYPAIR_SUCCESS: 'PROFILE.GET_SSO_KEYPAIR_SUCCESS',
    GET_SSO_KEYPAIR_FAILED: 'PROFILE.GET_SSO_KEYPAIR_FAILED',
    UPDATE_PROFILE_SUCCESS: 'PROFILE.UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILED: 'PROFILE.UPDATE_PROFILE_FAILED',
    UPDATE_AVATAR_SUCCESS: 'PROFILE.UPDATE_AVATAR_SUCCESS',
    UPDATE_AVATAR_FAILED: 'PROFILE.UPDATE_AVATAR_FAILED',
    GET_WALLETS_BY_EMAIL_SUCCESS: 'PROFILE.GET_WALLETS_BY_EMAIL_SUCCESS',
    GET_WALLETS_BY_EMAIL_FAILED: 'PROFILE.GET_WALLETS_BY_EMAIL_FAILED',
    SEND_VERIFICATION_SMS_SUCCESS: 'PROFILE.SEND_VERIFICATION_SMS_SUCCESS',
    SEND_VERIFICATION_SMS_FAILED: 'PROFILE.SEND_VERIFICATION_SMS_FAILED',
    VERIFY_PHONE_SUCCESS: 'PROFILE.VERIFY_PHONE_SUCCESS',
    VERIFY_PHONE_FAILED: 'PROFILE.VERIFY_PHONE_FAILED'
}

export const RESET_PASS = {
    SSO_RESET_PASSWORD_MAIL_SUCCESS: 'RESET_PASS.SSO_RESET_PASSWORD_MAIL_SUCCESS',
    SSO_RESET_PASSWORD_MAIL_FAILED: 'RESET_PASS.SSO_RESET_PASSWORD_MAIL_FAILED',
    GET_RECOVERY_KEYS_SUCCESS: 'RESET_PASS.GET_RECOVERY_KEYS_SUCCESS',
    GET_RECOVERY_KEYS_FAILED: 'RESET_PASS.GET_RECOVERY_KEYS_FAILED',
    SSO_RESET_PASSWORD_SUCCESS: 'RESET_PASS.SSO_RESET_PASSWORD_SUCCESS',
    SSO_RESET_PASSWORD_FAILED: 'RESET_PASS.SSO_RESET_PASSWORD_FAILED',
}

export const TABS = {
    SET_ACTIVE: 'TABS.SET_ACTIVE'
};