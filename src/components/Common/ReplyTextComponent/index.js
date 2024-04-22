import { DivInput, ButtonSend } from './styles';
import { Input } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createCommentReply } from '../../../redux/action/comment/comment';
import { useDispatch } from 'react-redux';
const { TextArea } = Input;

function ReplyTextComponent(props) {
  const [text, setText] = useState();

  const { filmId } = useParams();
  const dispatch = useDispatch();

  const handleSendComment = async () => {
    console.log(props.item);

    if (text) {
      const user = await JSON.parse(localStorage.getItem('userInfo'));
      const data = {
        userId: user._id,
        content: text,
        moviesId: filmId,
        parentCommentId: props.item._id,
        parentUserId: props.item.userId._id,
        rootCommentId: props.rootId,
      };
      await dispatch(createCommentReply(data));
      props.setOpen((prev) => ({
        ...prev,
        [props.item._id]: !prev[props.item._id],
      }));
    }
  };

  return (
    <DivInput>
      <TextArea value={text} onChange={(e) => setText(e.target.value)} />
      <ButtonSend onClick={handleSendComment}>Send</ButtonSend>
    </DivInput>
  );
}

export default ReplyTextComponent;
