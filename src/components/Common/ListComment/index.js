import { useEffect, useState } from 'react';
import {
  DivListComment,
  DivDetailComment,
  NameUser,
  ContentUser,
  RowComment,
  DivContent,
  ColLeftComment,
  ColRightComment,
  AvatarUserComment,
  DivAction,
  ReplyButton,
} from './styles';
import { MessageFilled } from '@ant-design/icons';
import ReplyTextComponent from '../ReplyTextComponent';

function ListComment({ dataComment }) {
  const [data, setData] = useState();
  const [open, setOpen] = useState({});

  useEffect(() => {
    setData(dataComment);
  }, [dataComment]);

  const handleOpenReply = (commentId) => {
    setOpen((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };
  return (
    <>
      <DivListComment>
        {data &&
          data.length &&
          data.map((item, id) => {
            return (
              <DivDetailComment key={id}>
                <RowComment>
                  <ColLeftComment span={2}>
                    <AvatarUserComment src={item.userId.avatarUser.url} />
                  </ColLeftComment>
                  <ColRightComment span={22}>
                    <DivContent>
                      <NameUser>
                        {item.userId.firstName} {item.userId.lastName}
                      </NameUser>
                      <ContentUser>{item.content}</ContentUser>
                    </DivContent>
                    <DivAction>
                      <ReplyButton onClick={() => handleOpenReply(item._id)}>
                        <MessageFilled />
                        <p>Reply</p>
                      </ReplyButton>
                      {open[item._id] && <ReplyTextComponent item={item} />}
                    </DivAction>
                  </ColRightComment>
                </RowComment>
              </DivDetailComment>
            );
          })}
      </DivListComment>
    </>
  );
}

export default ListComment;
