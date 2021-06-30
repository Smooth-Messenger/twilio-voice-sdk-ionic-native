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
import { IonicNativePlugin, checkAvailability } from '@ionic-native/core';
var CordovaPluginTwilioVoiceSdkOriginal = /** @class */ (function (_super) {
    __extends(CordovaPluginTwilioVoiceSdkOriginal, _super);
    function CordovaPluginTwilioVoiceSdkOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaPluginTwilioVoiceSdkOriginal.prototype.load = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return; // We add return; here to avoid any IDE / Compiler errors
            }
        })();
    };
    CordovaPluginTwilioVoiceSdkOriginal.pluginName = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.pluginRef = "twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk.git";
    CordovaPluginTwilioVoiceSdkOriginal.platforms = ["Android", "iOS"];
    return CordovaPluginTwilioVoiceSdkOriginal;
}(IonicNativePlugin));
var CordovaPluginTwilioVoiceSdk = new CordovaPluginTwilioVoiceSdkOriginal();
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHdDQUEyQyxNQUFNLG9CQUFvQixDQUFDOztJQXdCNUIsK0NBQWlCOzs7O0lBUWhFLDBDQUFJOzs7bURBQWlCO2dCQUNuQixPQUFPLENBQUMseURBQXlEO2FBQ2xFOzs7Ozs7OztzQ0E5Q0g7RUFvQ2lELGlCQUFpQjtTQUFyRCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gbG9hZHMgdGhlIGNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrIGluIHlvdXIgcGhvbmVnYXAgYXBwKGFuZHJvaWQvaW9zKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkayc7KlxuICogLi4uXG4gKlxuICogLy8uLi5cbiAqIGF3YWl0IHRoaXMuQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrLmxvYWQoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAndHdpbGlvdm9pY2VzZGsnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vamVmZmxpbndvb2QvY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2FpdHMgZm9yIHRoZSBwbHVnaW4gdG8gbG9hZCBhbmQgZXZlbnR1YWxseSBhZGRzIHdpbmRvdy5Ud2lsaW8gdG8gdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0XG4gICAqIEl0IGRvZXMgTk9UIGRvIGFueSBhZGRpdGlvbmFsIHN0ZXBzIG5lZWRlZCB0byBjb25maWd1cmUgdGhlIHBsdWdpbiB2YXJzLiByZWZlciBwbHVnaW4gZG9jcyB0byBmb2xsb3cgcGxhdGZvcm1cbiAgICogc3BlY2lmaWMgY29uZmlndXJhdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcGx1Z2luIGxvYWRzIGFuZCB3ZSBoYXZlIGEgd2luZG93LlR3aWxpb1xuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=