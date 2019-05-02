# Apps Script PayPal IPN Listener

This is a super-simple Google Apps Script Library project that provides a minimal API for interacting with the [PayPal IPN](https://developer.paypal.com/webapps/developer/docs/classic/products/instant-payment-notification/) postback service.

## Usage

1. [Add the Library to your Google Apps Script project](https://developers.google.com/apps-script/guides/libraries#gaining_access_to_a_library_and_including_it_in_your_project).
    * Use the library's Script ID (not its "Project Key"); the Script ID can be found in this repository's [.clasp.json](.clasp.json) file.
1. Choose a sensible identifier for the library in your project. The examples below assume the use of the default `PayPalIPNListener` identifier.
1. Use [this library's API](#example-usage) in your code.

Full documentation is provided in JSDoc documentation blocks in the comments preceeding each function.

## Example Usage

A simple example:

```js
/**
 * Example project's HTTP POST handler.
 *
 * @see https://developers.google.com/apps-script/guides/triggers/#dogete_and_doposte
 */
function doPost (e) {
    if (PayPalIPNListener.isIpnMessage(e)) {
        if (PayPalIPNListener.isValid(e)) {
            // Verification successul, so continue processing.
            // This means the PayPal payment is valid, not necessarily
            // that it meets your business needs. For example, you
            // should write code that ensures that the payment amount
            // is what you expect it to be, etc.
        } else {
            Logger.log('PayPal verification failed.');
        }
    }
}
```
