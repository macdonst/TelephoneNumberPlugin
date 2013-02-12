cordova.define("cordova/plugin/telephonenumber",
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var TelephoneNumber = function () {};

    var TelephoneNumberError = function(code, message) {
        this.code = code || null;
        this.message = message || '';
    };

    TelephoneNumber.NO_TELEPHONE_NUMBER = 0;

    TelephoneNumber.prototype.get = function(success,fail) {
        exec(success,fail,"TelephoneNumber",
            "get",[]);
    };

    var telephoneNumber = new TelephoneNumber();
    module.exports = telephoneNumber;
});

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.telephoneNumber) {
    window.plugins.telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
}
