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
import { IonicNativePlugin, checkAvailability } from '@ionic-native/core';
var CordovaPluginTwilioVoiceSdk = /** @class */ (function (_super) {
    __extends(CordovaPluginTwilioVoiceSdk, _super);
    function CordovaPluginTwilioVoiceSdk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaPluginTwilioVoiceSdk.prototype.load = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
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
        { type: Injectable }
    ];
    return CordovaPluginTwilioVoiceSdk;
}(IonicNativePlugin));
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx3Q0FBMkMsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3QjVCLCtDQUFpQjs7OztJQVFoRSwwQ0FBSTs7O21EQUFpQjtnQkFDbkIsT0FBTyxDQUFDLHlEQUF5RDthQUNsRTs7Ozs7Ozs7O2dCQVhGLFVBQVU7O3NDQW5DWDtFQW9DaUQsaUJBQWlCO1NBQXJELDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUNoZWNrLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNka1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBsb2FkcyB0aGUgY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsgaW4geW91ciBwaG9uZWdhcCBhcHAoYW5kcm9pZC9pb3MpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJzsqXG4gKiAuLi5cbiAqXG4gKiAvLy4uLlxuICogYXdhaXQgdGhpcy5Db3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsubG9hZCgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd0d2lsaW92b2ljZXNkaycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWZmbGlud29vZC9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkay5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3YWl0cyBmb3IgdGhlIHBsdWdpbiB0byBsb2FkIGFuZCBldmVudHVhbGx5IGFkZHMgd2luZG93LlR3aWxpbyB0byB0aGUgZ2xvYmFsIHdpbmRvdyBvYmplY3RcbiAgICogSXQgZG9lcyBOT1QgZG8gYW55IGFkZGl0aW9uYWwgc3RlcHMgbmVlZGVkIHRvIGNvbmZpZ3VyZSB0aGUgcGx1Z2luIHZhcnMuIHJlZmVyIHBsdWdpbiBkb2NzIHRvIGZvbGxvdyBwbGF0Zm9ybVxuICAgKiBzcGVjaWZpYyBjb25maWd1cmF0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBwbHVnaW4gbG9hZHMgYW5kIHdlIGhhdmUgYSB3aW5kb3cuVHdpbGlvXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==