import { Button } from 'mylib';
import React from 'react';
export default () => {
  return (
    <>
      <Button type="default">默认按钮</Button> &nbsp;
      <Button type="primary">主要按钮</Button>
      <Button loading></Button>
    </>
  );
};
