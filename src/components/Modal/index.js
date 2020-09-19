import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import {
  CloseOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

import { ModalIcon } from './Styles';

import { useStoriesContext } from 'context/StoriesContext';
import Image from 'components/Image';

function StoryModal() {
  const [zoom, setZoom] = useState(false);
  const [modalWidth, setModalWidth] = useState(600);
  const { state, dispatch } = useStoriesContext();

  const { story, currentImage } = state;
  const { Name, Url, isFirstImage, isLastImage, idx } = currentImage;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [story, Url]);

  useEffect(() => {
    setModalWidth(zoom ? 'auto' : 600);
  }, [zoom]);

  const handleCloseModal = () => {
    dispatch({ type: 'REMOVE_STORY' });
    setZoom(false);
  };

  const handleChangeImage = pos => () => {
    setModalWidth(600);
    dispatch({ type: 'CHANGE_CURRENT_IMAGE', payload: pos });
  };

  const handleKeyDown = ({ code }) => {
    if (!story.length && !Url) return;

    if (code === 'ArrowLeft' && !isFirstImage) {
      handleChangeImage(-1)();
    }

    if (code === 'ArrowRight' && !isLastImage) {
      handleChangeImage(1)();
    }
  };

  return (
    <React.Fragment>
      {!!story.length && (
        <React.Fragment>
          <ModalIcon className="close" onClick={handleCloseModal}>
            <CloseOutlined />
          </ModalIcon>
          {!isFirstImage && (
            <ModalIcon className="prev" onClick={handleChangeImage(-1)}>
              <ArrowLeftOutlined />
            </ModalIcon>
          )}
          {!isLastImage && (
            <ModalIcon className="next" onClick={handleChangeImage(1)}>
              <ArrowRightOutlined />
            </ModalIcon>
          )}
        </React.Fragment>
      )}
      <Modal
        closable={false}
        visible={!!story.length}
        onCancel={handleCloseModal}
        centered
        destroyOnClose
        footer={null}
        width={modalWidth}
      >
        {!!Url && (
          <Image
            key={idx}
            src={Url}
            alt={Name}
            onImageLoad={() => setModalWidth(prev => (zoom ? 'auto' : prev))}
            onImageClick={() => setZoom(prev => !prev)}
          />
        )}
      </Modal>
    </React.Fragment>
  );
}

export default StoryModal;
