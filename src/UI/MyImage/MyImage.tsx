import  { FC } from 'react';


interface MyImageProps {
    alt: string; 
    width?:number;
    height?:number;
    src: string;
    lazy?: boolean;
    className?: string;

}
const MyImage: FC<MyImageProps>= (props) => (
    <img alt={props.alt || '' }
    src={props.src} 
    style ={{width:props.width, height: props.height}}
    className={props.className}
    />
);

export default MyImage;
