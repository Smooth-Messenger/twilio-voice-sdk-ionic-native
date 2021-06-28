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
    CordovaPluginTwilioVoiceSdkOriginal.pluginName = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.plugin = "cordova-plugin-twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.pluginRef = "twiliovoicesdk";
    CordovaPluginTwilioVoiceSdkOriginal.repo = "https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk.git";
    CordovaPluginTwilioVoiceSdkOriginal.install = "";
    CordovaPluginTwilioVoiceSdkOriginal.installVariables = [];
    CordovaPluginTwilioVoiceSdkOriginal.platforms = ["Android", "iOS"];
    return CordovaPluginTwilioVoiceSdkOriginal;
}(IonicNativePlugin));
var CordovaPluginTwilioVoiceSdk = new CordovaPluginTwilioVoiceSdkOriginal();
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTBCdkIsK0NBQWlCOzs7O0lBUWhFLDBDQUFJOzs7Ozs7OztzQ0E5Q047RUFzQ2lELGlCQUFpQjtTQUFyRCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGxvYWRzIHRoZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkayBpbiB5b3VyIHBob25lZ2FwIGFwcChhbmRyb2lkL2lvcylcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnOypcbiAqIC4uLlxuICpcbiAqIC8vLi4uXG4gKiBhd2FpdCB0aGlzLkNvcmRvdmFQbHVnaW5Ud2lsaW9Wb2ljZVNkay5sb2FkKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3R3aWxpb3ZvaWNlc2RrJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZmZsaW53b29kL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdhaXRzIGZvciB0aGUgcGx1Z2luIHRvIGxvYWQgYW5kIGV2ZW50dWFsbHkgYWRkcyB3aW5kb3cuVHdpbGlvIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdFxuICAgKiBJdCBkb2VzIE5PVCBkbyBhbnkgYWRkaXRpb25hbCBzdGVwcyBuZWVkZWQgdG8gY29uZmlndXJlIHRoZSBwbHVnaW4gdmFycy4gcmVmZXIgcGx1Z2luIGRvY3MgdG8gZm9sbG93IHBsYXRmb3JtXG4gICAqIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHBsdWdpbiBsb2FkcyBhbmQgd2UgaGF2ZSBhIHdpbmRvdy5Ud2lsaW9cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==