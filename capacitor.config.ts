import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitornuxt.app',
  appName: 'capacitor-test',
  webDir: 'dist',
  bundledWebRuntime: false,
  // server: {
  //   iosScheme: "nuxtmobile",
  // },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
