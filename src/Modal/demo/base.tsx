import React, { useState } from 'react';
import {Modal} from 'mylib';

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={showModal}>Open Modal</button>
      <Modal visible={isModalVisible} title="My Modal" onClose={closeModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
