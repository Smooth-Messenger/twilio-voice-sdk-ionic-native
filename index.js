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
    CordovaPluginTwilioVoiceSdkOriginal.prototype.load = function (arg1, arg2) {
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
    CordovaPluginTwilioVoiceSdkOriginal.install = "";
    CordovaPluginTwilioVoiceSdkOriginal.installVariables = [];
    CordovaPluginTwilioVoiceSdkOriginal.platforms = ["Android", "iOS", "Web"];
    return CordovaPluginTwilioVoiceSdkOriginal;
}(IonicNativePlugin));
var CordovaPluginTwilioVoiceSdk = new CordovaPluginTwilioVoiceSdkOriginal();
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHdDQUErRixNQUFNLG9CQUFvQixDQUFDOztJQWtDaEYsK0NBQWlCOzs7O0lBU2hFLDBDQUFJLGFBQUMsSUFBWSxFQUFFLElBQVk7OzttREFBZ0I7Z0JBQzdDLE9BQU8sQ0FBQyx5REFBeUQ7YUFDbEU7Ozs7Ozs7Ozs7c0NBekRIO0VBOENpRCxpQkFBaUI7U0FBckQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNka1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkazogY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd0d2lsaW92b2ljZXNkaycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWZmbGlud29vZC9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkay5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXZWInXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBsb2FkKGFyZzE6IHN0cmluZywgYXJnMjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbn1cbiJdfQ==