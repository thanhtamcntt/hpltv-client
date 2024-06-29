import { useContext, useEffect, useState } from 'react';
import {
  NameUser,
  ContentUser,
  RowComment,
  DivContent,
  ColLeftComment,
  ColRightComment,
  AvatarUserComment,
  DivAction,
  ReplyButton,
  DivDetailCommentReply,
  DivActionComment,
  DivContainerAction,
  ButtonComment,
  DivInput,
  DivUpdate,
  ButtonSend,
  DivRightComment,
  TextTime,
  DivActionUpdate,
  DivLeft,
} from './styles';
import { MessageFilled, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Space, Col, Menu, Input } from 'antd';
import ReplyTextComponent from '../ReplyTextComponent';
import { CheckLoginContext } from '../../../contexts/LoginContext';
const { TextArea } = Input;

function ReplyComment({
  itemChild,
  item,
  open,
  setOpen,
  handleOpenReply,
  handleClickAction,
  input,
  setInput,
  updateCommentClick,
}) {
  const [value, setValue] = useState(itemChild.content);

  useEffect(() => {
    setValue(itemChild.content);
  }, [itemChild.content]);

  const { userInfo } = useContext(CheckLoginContext);

  const handleUpdateComment = (id) => {
    updateCommentClick(value, id);
  };
  const handleCancelComment = (id) => {
    setInput((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  function timeAgo() {
    const now = new Date();
    const commentDate = new Date(item.createAt);
    const diff = Math.abs(now - commentDate);

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }

  return (
    <DivDetailCommentReply className="detail-comment">
      <RowComment>
        <Col span={2}></Col>
        <ColLeftComment span={2}>
          <AvatarUserComment src={itemChild.userId.avatarUser.url} />
        </ColLeftComment>
        <ColRightComment>
          <DivRightComment span={19}>
            {input[itemChild._id] ? (
              <DivInput>
                <TextArea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <DivUpdate>
                  <ButtonSend
                    onClick={() => handleUpdateComment(itemChild._id)}>
                    Update
                  </ButtonSend>
                  <ButtonSend
                    onClick={() => handleCancelComment(itemChild._id)}>
                    Cancel
                  </ButtonSend>
                </DivUpdate>
              </DivInput>
            ) : (
              <>
                <DivContent>
                  <div>
                    <DivLeft>
                      <NameUser>
                        {itemChild.userId.firstName} {itemChild.userId.lastName}
                      </NameUser>
                      <ContentUser>
                        <b>
                          @{itemChild?.parentUserId?.firstName}{' '}
                          {itemChild?.parentUserId?.lastName}
                        </b>{' '}
                        {itemChild.content}
                      </ContentUser>
                    </DivLeft>
                    <DivActionUpdate>
                      {userInfo.userId === itemChild.userId._id &&
                        !input[itemChild._id] && (
                          <DivActionComment className="open-action-comment">
                            <Dropdown
                              overlay={
                                <Menu>
                                  <Menu.Item key="edit">
                                    <ButtonComment
                                      onClick={() =>
                                        handleClickAction(
                                          'UPDATE',
                                          itemChild._id,
                                        )
                                      }>
                                      Edit
                                    </ButtonComment>
                                  </Menu.Item>
                                  <Menu.Item key="delete">
                                    <ButtonComment
                                      onClick={() =>
                                        handleClickAction(
                                          'DELETE',
                                          itemChild._id,
                                        )
                                      }>
                                      Delete
                                    </ButtonComment>
                                  </Menu.Item>
                                </Menu>
                              }
                              placement="bottomRight">
                              <Space>
                                <EllipsisOutlined />
                              </Space>
                            </Dropdown>
                          </DivActionComment>
                        )}
                    </DivActionUpdate>
                  </div>
                </DivContent>
                <DivAction>
                  <DivContainerAction>
                    <TextTime>{timeAgo()}</TextTime>
                    <ReplyButton onClick={() => handleOpenReply(itemChild._id)}>
                      <MessageFilled />
                      <p>Reply</p>
                    </ReplyButton>
                  </DivContainerAction>
                </DivAction>
              </>
            )}
          </DivRightComment>
          {open[itemChild._id] && (
            <ReplyTextComponent
              item={itemChild}
              rootId={item._id}
              setOpen={setOpen}
            />
          )}
        </ColRightComment>
      </RowComment>
    </DivDetailCommentReply>
  );
}

export default ReplyComment;
