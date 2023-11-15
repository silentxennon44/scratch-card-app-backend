/// <reference types="react-scripts" />

declare module '*.scss' {
  // const css: string
  // export default css
  
  const classes: { readonly [key: string]: string };
  export default classes;
}