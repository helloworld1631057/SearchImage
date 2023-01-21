import { useState } from "react";
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

const Displaycontainer = ({ dataset }) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] =useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return(
        <>
        <div className={modal ? 'modal open' : 'modal'}>
            <TransformWrapper>
                <TransformComponent>
                    <img src={tempImgSrc} />
                </TransformComponent>
            </TransformWrapper>
            <div className="close" onClick={() => setModal(false)}>X</div>
        </div>
        <div className="display-container">
            
            {
                dataset.map((data) => (
                    
                    <img src={data.thumbnailUrl} key={data.imageId} className="image-container" onClick={() => getImg(data.thumbnailUrl)} />
                    // <div className="image-container">1</div>
                ))
            }
        </div>
        </>
    )
}

export default Displaycontainer;