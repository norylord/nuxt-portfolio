// nuxt.config.ts

export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
        },
        pageTransition: {
            name: "fade",
            mode: "out-in", // default
        },
        layoutTransition: {
            name: "slide",
            mode: "out-in", // default
        },
        meta: {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "@/assets/variables/_colors.sass" as *',
                },
            },
        },
    },
    // modules: ["@nuxtjs/eslint-module", "@nuxtjs/i18n", "@nuxtjs/device"],
    device: {
        refreshOnResize: true,
    },
});
