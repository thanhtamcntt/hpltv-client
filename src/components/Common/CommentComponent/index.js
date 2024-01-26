import {
  DivComment,
  DivTitle,
  TitleComment,
  DivInput,
  ButtonSend,
} from './styles';
import { MessageOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useRef } from 'react';
const { TextArea } = Input;

function CommentComponent(props) {
  const refText = useRef();

  const handleSendComment = async () => {
    props.handleAddComment(refText.current.resizableTextArea.textArea.value);
  };

  return (
    <DivComment>
      <DivTitle>
        <TitleComment>
          Comments <MessageOutlined />
        </TitleComment>
      </DivTitle>
      <DivInput>
        <TextArea
          ref={refText}
          placeholder="Please discuss, please do not spam, share links to make money, unhealthy,... to avoid having your account locked"
        />
        <ButtonSend onClick={handleSendComment}>Send</ButtonSend>
      </DivInput>
    </DivComment>
  );
}

export default CommentComponent;
