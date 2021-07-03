import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name cordova-plugin-twiliovoicesdk
 * @description
 * This plugin loads the cordova-plugin-twiliovoicesdk in your phonegap app(android/ios)
 *
 * @usage
 * ```typescript
 * import { CordovaPluginTwilioVoiceSdk } from '@ionic-native/cordova-plugin-twiliovoicesdk';*
 * ...
 *
 * //...
 * await this.CordovaPluginTwilioVoiceSdk.load();
 * ```
 */
export declare class CordovaPluginTwilioVoiceSdk extends IonicNativePlugin {
    /**
     * This function waits for the plugin to load and eventually adds window.Twilio to the global window object
     * It does NOT do any additional steps needed to configure the plugin vars. refer plugin docs to follow platform
     * specific configurations
     * @return {Promise<any>} Returns a promise that resolves when plugin loads and we have a window.Twilio
     */
    create(): TwilioVoiceSDKObject;
}
export declare class TwilioVoiceSDKObject {
    private _objectInstance;
    constructor();
    load(): Promise<any>;
}
