import { useState } from "react";
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

const Displaycontainer = ({ dataset }) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] =useState('');
    const [scale, setScale] = useState(0);

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    // const handleDbClick = () => {
    //     // console.log('Db clicked');
    //     var value = document.getElementById('imagemodal');
    //     var curr = value.clientHeight;
    //     if(scale < 2){
    //         value.style.height = (curr * 2) + "px";
    //         setScale(prev => prev+1);
    //     }
    //     else{
    //         value.style.height = '100vh';
    //         setScale(0);
    //     }
        
    // }

    // const handleReset = () => {
    //     var value = document.getElementById('imagemodal');
    //     value.style.height = '100vh';
    //     setScale(0);
    // }

    return(
        <>
        <div className={modal ? 'modal open' : 'modal'}>
            <TransformWrapper wheel={{wheelDisabled: true}} onPanningStop={(scale) => {setScale(scale), console.log(scale)}} doubleClick={{ mode: "reset" }}>
                <TransformComponent >
                    <img src={tempImgSrc} id='imagemodal' />
                </TransformComponent>
            </TransformWrapper>
            <div className="close" onClick={() => {setModal(false)}}>X</div>
        </div>
        <div className="display-container">
            
            {
                dataset.map((data) => (
                    
                    <img src={data.contentUrl} key={data.imageId} className="image-container" onClick={() => getImg(data.thumbnailUrl)} />
                    // <div className="image-container">1</div>
                ))
            }
        </div>
        </>
    )
}

export default Displaycontainer;
