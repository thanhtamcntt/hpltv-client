import {
  DivComment,
  DivTitle,
  TitleComment,
  DivInput,
  ButtonSend,
} from './styles';
import { MessageOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState, useEffect } from 'react';
import {
  createComment,
  fetchAllComment,
} from '../../../redux/action/comment/comment';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListComment from '../ListComment';
const { TextArea } = Input;

function CommentComponent(props) {
  const [value, setValue] = useState();
  const [dataComment, setDataComment] = useState();

  const dispatch = useDispatch();

  const comment = useSelector((state) => state.commentSlice);

  const { filmId } = useParams();
  useEffect(() => {
    Promise.all([dispatch(fetchAllComment())]);
  }, [dispatch]);

  useEffect(() => {
    if (comment) {
      let data = [];
      for (let item of comment.data) {
        if (item.moviesId === filmId) {
          data.push(item);
        }
      }
      setDataComment(data);
    }
  }, [comment]);

  const handleSendComment = async () => {
    const user = await JSON.parse(localStorage.getItem('userInfo'));
    const data = {
      userId: user._id,
      content: value,
      moviesId: filmId,
    };
    await dispatch(createComment(data));

    setValue('');
  };

  return (
    <>
      <DivComment>
        <DivTitle>
          <TitleComment>
            Comments <MessageOutlined />
          </TitleComment>
        </DivTitle>
        <DivInput>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Please discuss, please do not spam, share links to make money, unhealthy,... to avoid having your account locked"
          />
          <ButtonSend onClick={handleSendComment}>Send</ButtonSend>
        </DivInput>
      </DivComment>
      <ListComment dataComment={dataComment} />
    </>
  );
}

export default CommentComponent;
