import React, {useState} from "react";
import styled from "styled-components";

import noImage from "../../assets/images/img-no-img.png";

const FileWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 0;
`

const FileLabel = styled.p`
  font-size: var(--font10);
  font-weight: 400;
  color: var(--text7);
  position: absolute;
  left: 0;
  top: -10px;
`

const ThumbnailWrapper = styled.div`
  width: 95px;
  height: 95px;
  position: relative;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`

const ThumbnailRemove = styled.button`
  width: 29px;
  height: 29px;
  position: absolute;
  border-radius: 10px;
  background-color: rgba(169, 173, 168, 0.3);
  backdrop-filter: blur(10px);
  border: 0;
  right: -6px;
  bottom: -6px;
  color: var(--text5);
  font-weight: 500;
  font-size: var(--font20);
  line-height: 29px;
`

const ThumbnailInput = styled.input`
  display: none;
`

const ThumbnailLabel = styled.label`
  width: 29px;
  height: 29px;
  position: absolute;
  border-radius: 10px;
  background-color: rgba(169, 173, 168, 0.3);
  backdrop-filter: blur(10px);
  border: 0;
  right: -6px;
  bottom: -6px;
  color: var(--text5);
  font-weight: 500;
  font-size: var(--font20);
  line-height: 29px;
  text-align: center;
`

function ImageThumbnail({ name }){
    const [uploadImage, setUploadImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setUploadImage(URL.createObjectURL(file));
    }

    const handleImageRemove = () => {
        setUploadImage(null);
    }

    return(
        <>
            <FileWrapper>
                <FileLabel>프로필 사진</FileLabel>
                {uploadImage ? (
                    <ThumbnailWrapper>
                        <ThumbnailImage src={uploadImage} alt="프로필 이미지" />
                        <ThumbnailRemove onClick={handleImageRemove}>×</ThumbnailRemove>
                    </ThumbnailWrapper>
                ) : (
                    <ThumbnailWrapper>
                        <ThumbnailImage src={noImage} alt="프로필 이미지" />
                        <ThumbnailInput type="file" id={name} name={name} onChange={handleImageUpload} />
                        <ThumbnailLabel htmlFor="file-input" for={name}>＋</ThumbnailLabel>
                    </ThumbnailWrapper>
                )}
            </FileWrapper>
        </>
    )
}

export default ImageThumbnail;