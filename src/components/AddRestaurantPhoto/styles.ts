import styled from "styled-components";

interface IUploadWrapperProps {
  withPhoto: boolean;
}

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const PhotoBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const AddPhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PhotoPreview = styled.div`
  display: flex;
`;

export const GalleryPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 170px;
`;

export const UploadWrapper = styled.div<IUploadWrapperProps>`
  justify-content: ${({ withPhoto }) =>
    withPhoto ? "space-around" : "center"};
  width: 100%;
  display: flex;
`;

export const UploadPhoto = styled.input`
  visibility: hidden;
`;
