/**
 * Simple Google Apps Script Library project for creating a
 * PayPal IPN listener as part of a published Apps Script Web App.
 */

/**
 * Tests an HTTP request to determine if it claims to be from PayPal.
 *
 * @param {Event} e The Google Apps Script HTTP Event object.
 *
 * @return {boolean}
 */
function isIpnMessage (e) {
    return (e.parameter.verify_sign) ? true : false;
}

/**
 * Returns a PayPal IPN base URL.
 *
 * @access private
 *
 * @param {boolean} isTest If true, gets the sandbox URL.
 *
 * @return string
 */
function getBaseUrl_ (isTest) {
    return (isTest)
        ? 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr'
        : 'https://ipnpb.paypal.com/cgi-bin/webscr';
}

/**
 * Validate PayPal IPN message.
 *
 * @param {Event} e The Google Apps Script HTTP Event object.
 *
 * @return {boolean}
 *
 * @see https://developers.google.com/apps-script/guides/web#request_parameters
 */
function isValid (e) {
    var qs   = '?cmd=_notify-validate&' + e.postData.contents;
    var url  = getBaseUrl_(e.parameter.test_ipn) + qs;
    var resp = UrlFetchApp.fetch(url);
    return 'VERIFIED' === resp.getContentText();
}
