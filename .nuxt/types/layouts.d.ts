import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main-layout"
declare module "C:/Users/Nikhil Rai/Desktop/dqdawq/aliexpress-clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}