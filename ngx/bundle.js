'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@angular/core');
var core$1 = require('@ionic-native/core');

var CordovaPluginTwilioVoiceSdk = /** @class */ (function (_super) {
    tslib.__extends(CordovaPluginTwilioVoiceSdk, _super);
    function CordovaPluginTwilioVoiceSdk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function waits for the plugin to load and eventually adds window.Twilio to the global window object
     * It does NOT do any additional steps needed to configure the plugin vars. refer plugin docs to follow platform
     * specific configurations
     * @return {Promise<any>} Returns a promise that resolves when plugin loads and we have a window.Twilio
     */
    CordovaPluginTwilioVoiceSdk.prototype.create = function () {
        return new TwilioVoiceSDKObject();
    };
    CordovaPluginTwilioVoiceSdk.pluginName = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.pluginRef = "TwilioPlugin.TwilioVoiceClient";
    CordovaPluginTwilioVoiceSdk.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdk.platforms = ["Android", "iOS"];
    CordovaPluginTwilioVoiceSdk.decorators = [
        { type: core.Injectable }
    ];
    return CordovaPluginTwilioVoiceSdk;
}(core$1.IonicNativePlugin));
var TwilioVoiceSDKObject = /** @class */ (function () {
    function TwilioVoiceSDKObject() {
        if (core$1.checkAvailability(CordovaPluginTwilioVoiceSdk.getPluginRef(), null, CordovaPluginTwilioVoiceSdk.getPluginName()) === true) {
            // @ts-ignore
            this._objectInstance = window.Twilio.TwilioVoiceClient;
        }
    }
    TwilioVoiceSDKObject.prototype.load = function () { return core$1.cordovaInstance(this, "load", {}, arguments); };
    TwilioVoiceSDKObject.plugin = "cordova-plugin-twiliovoicesdk";
    TwilioVoiceSDKObject.pluginName = "cordova-plugin-twiliovoicesdk";
    return TwilioVoiceSDKObject;
}());

exports.CordovaPluginTwilioVoiceSdk = CordovaPluginTwilioVoiceSdk;
exports.TwilioVoiceSDKObject = TwilioVoiceSDKObject;
