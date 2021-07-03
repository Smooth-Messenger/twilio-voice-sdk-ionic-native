import { __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaInstance, checkAvailability } from '@ionic-native/core';
var CordovaPluginTwilioVoiceSdk = /** @class */ (function (_super) {
    __extends(CordovaPluginTwilioVoiceSdk, _super);
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
        { type: Injectable }
    ];
    return CordovaPluginTwilioVoiceSdk;
}(IonicNativePlugin));
export { CordovaPluginTwilioVoiceSdk };
var TwilioVoiceSDKObject = /** @class */ (function () {
    function TwilioVoiceSDKObject() {
        if (checkAvailability(CordovaPluginTwilioVoiceSdk.getPluginRef(), null, CordovaPluginTwilioVoiceSdk.getPluginName()) === true) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzQ0FBMkMsaUJBQWlCLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7O0lBd0JoRSwrQ0FBaUI7Ozs7SUFDaEU7Ozs7O09BS0c7SUFFSCw0Q0FBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7OztnQkFYRixVQUFVOztzQ0FuQ1g7RUFvQ2lELGlCQUFpQjtTQUFyRCwyQkFBMkI7O0lBbUJ0QztRQUNFLElBQ0UsaUJBQWlCLENBQ2YsMkJBQTJCLENBQUMsWUFBWSxFQUFFLEVBQzFDLElBQUksRUFDSiwyQkFBMkIsQ0FBQyxhQUFhLEVBQUUsQ0FDNUMsS0FBSyxJQUFJLEVBQ1Y7WUFDQSxhQUFhO1lBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUdELG1DQUFJOzs7K0JBckVOOztTQXFEYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgY2hlY2tBdmFpbGFiaWxpdHksIENvcmRvdmFJbnN0YW5jZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gbG9hZHMgdGhlIGNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrIGluIHlvdXIgcGhvbmVnYXAgYXBwKGFuZHJvaWQvaW9zKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkayc7KlxuICogLi4uXG4gKlxuICogLy8uLi5cbiAqIGF3YWl0IHRoaXMuQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrLmxvYWQoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnVHdpbGlvUGx1Z2luLlR3aWxpb1ZvaWNlQ2xpZW50JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZmZsaW53b29kL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2FpdHMgZm9yIHRoZSBwbHVnaW4gdG8gbG9hZCBhbmQgZXZlbnR1YWxseSBhZGRzIHdpbmRvdy5Ud2lsaW8gdG8gdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0XG4gICAqIEl0IGRvZXMgTk9UIGRvIGFueSBhZGRpdGlvbmFsIHN0ZXBzIG5lZWRlZCB0byBjb25maWd1cmUgdGhlIHBsdWdpbiB2YXJzLiByZWZlciBwbHVnaW4gZG9jcyB0byBmb2xsb3cgcGxhdGZvcm1cbiAgICogc3BlY2lmaWMgY29uZmlndXJhdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcGx1Z2luIGxvYWRzIGFuZCB3ZSBoYXZlIGEgd2luZG93LlR3aWxpb1xuICAgKi9cblxuICBjcmVhdGUoKTogVHdpbGlvVm9pY2VTREtPYmplY3Qge1xuICAgIHJldHVybiBuZXcgVHdpbGlvVm9pY2VTREtPYmplY3QoKTtcbiAgfVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLFxuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLFxufSlcbmV4cG9ydCBjbGFzcyBUd2lsaW9Wb2ljZVNES09iamVjdCB7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChcbiAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KFxuICAgICAgICBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsuZ2V0UGx1Z2luUmVmKCksXG4gICAgICAgIG51bGwsXG4gICAgICAgIENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkay5nZXRQbHVnaW5OYW1lKClcbiAgICAgICkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gd2luZG93LlR3aWxpby5Ud2lsaW9Wb2ljZUNsaWVudDtcbiAgICB9XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19