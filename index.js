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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { Plugin, Cordova, IonicNativePlugin, } from '@ionic-native/core';
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
    CordovaPluginTwilioVoiceSdk.prototype.load = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CordovaPluginTwilioVoiceSdk.prototype, "load", null);
    CordovaPluginTwilioVoiceSdk = __decorate([
        Plugin({
            pluginName: 'cordova-plugin-twiliovoicesdk',
            plugin: 'cordova-plugin-twiliovoicesdk',
            pluginRef: 'twiliovoicesdk',
            repo: 'https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk.git',
            install: '',
            installVariables: [],
            platforms: ['Android', 'iOS'],
        }),
        Injectable()
    ], CordovaPluginTwilioVoiceSdk);
    return CordovaPluginTwilioVoiceSdk;
}(IonicNativePlugin));
export { CordovaPluginTwilioVoiceSdk };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFJUCxpQkFBaUIsR0FDbEIsTUFBTSxvQkFBb0IsQ0FBQztBQUc1Qjs7Ozs7Ozs7Ozs7OztHQWFHO0FBV0g7SUFBaUQsK0NBQWlCO0lBQWxFOztJQVdBLENBQUM7SUFWQzs7Ozs7T0FLRztJQUVILDBDQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMseURBQXlEO0lBQ25FLENBQUM7SUFGRDtRQURDLE9BQU8sRUFBRTs7OzsyREFHVDtJQVZVLDJCQUEyQjtRQVZ2QyxNQUFNLENBQUM7WUFDTixVQUFVLEVBQUUsK0JBQStCO1lBQzNDLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixJQUFJLEVBQUUsa0VBQWtFO1lBQ3hFLE9BQU8sRUFBRSxFQUFFO1lBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1NBQzlCLENBQUM7UUFDRCxVQUFVLEVBQUU7T0FDQSwyQkFBMkIsQ0FXdkM7SUFBRCxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQsaUJBQWlCLEdBV2pFO1NBWFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNka1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBsb2FkcyB0aGUgY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsgaW4geW91ciBwaG9uZWdhcCBhcHAoYW5kcm9pZC9pb3MpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmRvdmEtcGx1Z2luLXR3aWxpb3ZvaWNlc2RrJzsqXG4gKiAuLi5cbiAqXG4gKiAvLy4uLlxuICogYXdhaXQgdGhpcy5Db3Jkb3ZhUGx1Z2luVHdpbGlvVm9pY2VTZGsubG9hZCgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tdHdpbGlvdm9pY2VzZGsnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd0d2lsaW92b2ljZXNkaycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWZmbGlud29vZC9jb3Jkb3ZhLXBsdWdpbi10d2lsaW92b2ljZXNkay5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29yZG92YVBsdWdpblR3aWxpb1ZvaWNlU2RrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3YWl0cyBmb3IgdGhlIHBsdWdpbiB0byBsb2FkIGFuZCBldmVudHVhbGx5IGFkZHMgd2luZG93LlR3aWxpbyB0byB0aGUgZ2xvYmFsIHdpbmRvdyBvYmplY3RcbiAgICogSXQgZG9lcyBOT1QgZG8gYW55IGFkZGl0aW9uYWwgc3RlcHMgbmVlZGVkIHRvIGNvbmZpZ3VyZSB0aGUgcGx1Z2luIHZhcnMuIHJlZmVyIHBsdWdpbiBkb2NzIHRvIGZvbGxvdyBwbGF0Zm9ybVxuICAgKiBzcGVjaWZpYyBjb25maWd1cmF0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBwbHVnaW4gbG9hZHMgYW5kIHdlIGhhdmUgYSB3aW5kb3cuVHdpbGlvXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=