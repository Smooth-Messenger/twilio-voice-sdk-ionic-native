'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var CordovaPluginTwilioVoiceSdk = /** @class */ (function (_super) {
    tslib.__extends(CordovaPluginTwilioVoiceSdk, _super);
    function CordovaPluginTwilioVoiceSdk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaPluginTwilioVoiceSdk.prototype.load = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return; // We add return; here to avoid any IDE / Compiler errors
            }
        })();
    };
    CordovaPluginTwilioVoiceSdk.pluginName = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.pluginRef = "twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk.git";
    CordovaPluginTwilioVoiceSdk.platforms = ["Android", "iOS"];
    CordovaPluginTwilioVoiceSdk.decorators = [
        { type: core$1.Injectable }
    ];
    return CordovaPluginTwilioVoiceSdk;
}(core.IonicNativePlugin));

exports.CordovaPluginTwilioVoiceSdk = CordovaPluginTwilioVoiceSdk;
