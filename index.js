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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CordovaPluginTwilioVoiceSdkOriginal = /** @class */ (function (_super) {
    __extends(CordovaPluginTwilioVoiceSdkOriginal, _super);
    function CordovaPluginTwilioVoiceSdkOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaPluginTwilioVoiceSdkOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CordovaPluginTwilioVoiceSdkOriginal.pluginName = "twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.pluginRef = "twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.platforms = ["Android", "iOS"];
    return CordovaPluginTwilioVoiceSdkOriginal;
}(IonicNativePlugin));
var CordovaPluginTwilioVoiceSdk = new CordovaPluginTwilioVoiceSdkOriginal();
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUFvRCxNQUFNLG9CQUFvQixDQUFDOztJQXdCckMsK0NBQWlCOzs7O0lBUWhFLDBDQUFJOzs7Ozs7c0NBNUNOO0VBb0NpRCxpQkFBaUI7U0FBckQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGxvYWRzIHRoZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkayBpbiB5b3VyIHBob25lZ2FwIGFwcChhbmRyb2lkL2lvcylcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnOypcbiAqIC4uLlxuICpcbiAqIC8vLi4uXG4gKiBhd2FpdCB0aGlzLkNvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkay5sb2FkKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICd0d2lsaW92b2ljZXNkaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3R3aWxpb3ZvaWNlc2RrJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZmZsaW53b29kL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2FpdHMgZm9yIHRoZSBwbHVnaW4gdG8gbG9hZCBhbmQgZXZlbnR1YWxseSBhZGRzIHdpbmRvdy5Ud2lsaW8gdG8gdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0XG4gICAqIEl0IGRvZXMgTk9UIGRvIGFueSBhZGRpdGlvbmFsIHN0ZXBzIG5lZWRlZCB0byBjb25maWd1cmUgdGhlIHBsdWdpbiB2YXJzLiByZWZlciBwbHVnaW4gZG9jcyB0byBmb2xsb3cgcGxhdGZvcm1cbiAgICogc3BlY2lmaWMgY29uZmlndXJhdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcGx1Z2luIGxvYWRzIGFuZCB3ZSBoYXZlIGEgd2luZG93LlR3aWxpb1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19