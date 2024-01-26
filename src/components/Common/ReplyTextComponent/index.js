import { DivInput, ButtonSend } from './styles';
import { Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
function ReplyTextComponent(props) {
  const [text, setText] = useState(
    '@' + props.item.userId.firstName + ' ' + props.item.userId.lastName + ' ',
  );

  const handleSendComment = async () => {
    // props.handleAddComment(refText.current.resizableTextArea.textArea.value);
    console.log(props.item);
  };

  return (
    <DivInput>
      <TextArea value={text} onChange={(e) => setText(e.target.value)} />
      <ButtonSend onClick={handleSendComment}>Send</ButtonSend>
    </DivInput>
  );
}

export default ReplyTextComponent;
