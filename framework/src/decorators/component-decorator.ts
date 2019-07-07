export function Component(htmlPath:string,cssPath:string) {
    return function <T extends {new(...args:any[]):{}}>(constructor:T) {
        return class extends constructor {
            htmlContent = htmlPath;
            cssContent = cssPath;
        }
    }
}