/// <reference types="react-scripts" />

// import store from "@/store";

declare global {
  interface Window {
    AppStore: any;
    build_info: {
      pkg: {
        name: string
        version: string
        dependencies: Recordable<string>
        devDependencies: Recordable<string>
      }
      lastBuildTime: string
    }
  }
}

type Nullable<T> = T | null
type Recordable<T = any> = Record<string, T>
interface window extends Window {
   AppStore?: typeof store;
  }

// declare module '*.scss' {
//   // const css: string
//   // export default css
  
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }