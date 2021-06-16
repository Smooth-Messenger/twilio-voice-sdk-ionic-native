**ionic-native Plugin wrapper for https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk**

This is a plugin generated using the ionic-native repo's DEVELOPER.md instructions. I had to replace the `@Cordova` decorator with `@CordovaCheck` as `Cordova` is not exported from `@ionic-native/core`

To use this plugin in your capacitor project, simply add this dependency in your `package.json`

`"@ionic-native/cordova-plugin-twiliovoicesdk": "https://github.com/rahulserver/cordova-plugin-twiliovoicesdk-wrapper.git"`

And then to use it, import it using:

` import { CordovaPluginTwilioVoiceSdk } from '@ionic-native/cordova-plugin-twiliovoicesdk';`

Then run thie `load` function to wait for `window.Twilio` to be added in your android/iOS app.

` await this.CordovaPluginTwilioVoiceSdk.load();`

I might consider raising PR on the original ionic-native repo to have it listed as a supported cordova wrapper, but for now this just does the job for above plugin.
Note: works only on android and iOS platforms.

