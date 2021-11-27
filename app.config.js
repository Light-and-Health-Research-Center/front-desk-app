export default {
  expo: {
    name: "Front Desk Bot",
    slug: "front-desk-bot",
    version: "1.0.0",
    orientation: "landscape",
    icon: "./assets/icon.png",
    ios: {
      bundleIdentifier: "com.lightandhealthresearchcenter.frontdeskbot",
      buildNumber: "1.0.0",
    },
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      requireFullScreen: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
