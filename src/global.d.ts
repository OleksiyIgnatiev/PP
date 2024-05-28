// declarations.d.ts

// Декларация для CSS-модулей
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  // Декларация для PNG-изображений
  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  // Добавьте другие декларации, если требуется, например для jpg, svg и т.д.
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default value;
  }
  