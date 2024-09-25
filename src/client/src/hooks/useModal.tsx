import { useState } from "react";
import { Modal } from "antd";

interface UseModalOptions {
  title?: string;
  content?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<UseModalOptions>({});

  const showModal = (options: UseModalOptions) => {
    setModalOptions(options);
    setOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setOpen(false);
    if (modalOptions.onCancel) {
      modalOptions.onCancel();
    }
  };

  const RenderModal = () => (
    <Modal
      title={modalOptions.title}
      open={open}
      onOk={() => {
        setOpen(false);
        if (modalOptions.onOk) {
          modalOptions.onOk();
        }
      }}
      onCancel={closeModal}
    >
      {modalOptions.content}
    </Modal>
  );

  return { showModal, closeModal, RenderModal };
};

export default useModal;
