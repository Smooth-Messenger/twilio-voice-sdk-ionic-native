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
 *
 * this.cordova-plugin-twiliovoicesdk.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class CordovaPluginTwilioVoiceSdkOriginal extends IonicNativePlugin {
    /**
     * This function waits for the plugin to load and eventually adds window.Twilio to the global window object
     * @return {Promise<any>} Returns a promise that resolves when plugin loads and we have a window.Twilio
     */
    load(): Promise<any>;
}

export declare const CordovaPluginTwilioVoiceSdk: CordovaPluginTwilioVoiceSdkOriginal;
