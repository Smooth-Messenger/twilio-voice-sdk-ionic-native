var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordovaInstance, checkAvailability } from '@ionic-native/core';
var CordovaPluginTwilioVoiceSdkOriginal = /** @class */ (function (_super) {
    __extends(CordovaPluginTwilioVoiceSdkOriginal, _super);
    function CordovaPluginTwilioVoiceSdkOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function waits for the plugin to load and eventually adds window.Twilio to the global window object
     * It does NOT do any additional steps needed to configure the plugin vars. refer plugin docs to follow platform
     * specific configurations
     * @return {Promise<any>} Returns a promise that resolves when plugin loads and we have a window.Twilio
     */
    CordovaPluginTwilioVoiceSdkOriginal.prototype.create = function () {
        return new TwilioVoiceSDKObject();
    };
    CordovaPluginTwilioVoiceSdkOriginal.pluginName = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.pluginRef = "TwilioPlugin.TwilioVoiceClient";
    CordovaPluginTwilioVoiceSdkOriginal.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.platforms = ["Android", "iOS"];
    return CordovaPluginTwilioVoiceSdkOriginal;
}(IonicNativePlugin));
var CordovaPluginTwilioVoiceSdk = new CordovaPluginTwilioVoiceSdkOriginal();
export { CordovaPluginTwilioVoiceSdk };
var TwilioVoiceSDKObject = /** @class */ (function () {
    function TwilioVoiceSDKObject() {
        if (checkAvailability(CordovaPluginTwilioVoiceSdkOriginal.getPluginRef(), null, CordovaPluginTwilioVoiceSdkOriginal.getPluginName()) === true) {
            // @ts-ignore
            this._objectInstance = window.Twilio.TwilioVoiceClient;
        }
    }
    TwilioVoiceSDKObject.prototype.load = function () { return cordovaInstance(this, "load", {}, arguments); };
    TwilioVoiceSDKObject.plugin = "cordova-plugin-twiliovoicesdk";
    TwilioVoiceSDKObject.pluginName = "cordova-plugin-twiliovoicesdk";
    return TwilioVoiceSDKObject;
}());
export { TwilioVoiceSDKObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHNDQUEyQyxpQkFBaUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3QmhFLCtDQUFpQjs7OztJQUNoRTs7Ozs7T0FLRztJQUVILDRDQUFNLEdBQU47UUFDRSxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7c0NBOUNIO0VBb0NpRCxpQkFBaUI7U0FBckQsMkJBQTJCOztJQW1CdEM7UUFDRSxJQUNFLGlCQUFpQixDQUNmLDJCQUEyQixDQUFDLFlBQVksRUFBRSxFQUMxQyxJQUFJLEVBQ0osMkJBQTJCLENBQUMsYUFBYSxFQUFFLENBQzVDLEtBQUssSUFBSSxFQUNWO1lBQ0EsYUFBYTtZQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFHRCxtQ0FBSTs7OytCQXJFTjs7U0FxRGEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5LCBDb3Jkb3ZhSW5zdGFuY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGxvYWRzIHRoZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkayBpbiB5b3VyIHBob25lZ2FwIGFwcChhbmRyb2lkL2lvcylcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnOypcbiAqIC4uLlxuICpcbiAqIC8vLi4uXG4gKiBhd2FpdCB0aGlzLkNvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkay5sb2FkKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ1R3aWxpb1BsdWdpbi5Ud2lsaW9Wb2ljZUNsaWVudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWZmbGlud29vZC9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdhaXRzIGZvciB0aGUgcGx1Z2luIHRvIGxvYWQgYW5kIGV2ZW50dWFsbHkgYWRkcyB3aW5kb3cuVHdpbGlvIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdFxuICAgKiBJdCBkb2VzIE5PVCBkbyBhbnkgYWRkaXRpb25hbCBzdGVwcyBuZWVkZWQgdG8gY29uZmlndXJlIHRoZSBwbHVnaW4gdmFycy4gcmVmZXIgcGx1Z2luIGRvY3MgdG8gZm9sbG93IHBsYXRmb3JtXG4gICAqIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHBsdWdpbiBsb2FkcyBhbmQgd2UgaGF2ZSBhIHdpbmRvdy5Ud2lsaW9cbiAgICovXG5cbiAgY3JlYXRlKCk6IFR3aWxpb1ZvaWNlU0RLT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IFR3aWxpb1ZvaWNlU0RLT2JqZWN0KCk7XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJyxcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJyxcbn0pXG5leHBvcnQgY2xhc3MgVHdpbGlvVm9pY2VTREtPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoXG4gICAgICBjaGVja0F2YWlsYWJpbGl0eShcbiAgICAgICAgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrLmdldFBsdWdpblJlZigpLFxuICAgICAgICBudWxsLFxuICAgICAgICBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsuZ2V0UGx1Z2luTmFtZSgpXG4gICAgICApID09PSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IHdpbmRvdy5Ud2lsaW8uVHdpbGlvVm9pY2VDbGllbnQ7XG4gICAgfVxuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==