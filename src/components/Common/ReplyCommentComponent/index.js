import { useState } from 'react';
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
} from './styles';
import { MessageFilled, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Space, Col, Menu, Input } from 'antd';
import ReplyTextComponent from '../ReplyTextComponent';
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

  const handleUpdateComment = (id) => {
    updateCommentClick(value, id);
  };
  const handleCancelComment = (id) => {
    setInput((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <DivDetailCommentReply className="detail-comment">
      <RowComment>
        <Col span={2}></Col>
        <ColLeftComment span={2}>
          <AvatarUserComment src={itemChild.userId.avatarUser.url} />
        </ColLeftComment>
        <ColRightComment span={19}>
          {input[itemChild._id] ? (
            <DivInput>
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <DivUpdate>
                <ButtonSend onClick={() => handleUpdateComment(itemChild._id)}>
                  Update
                </ButtonSend>
                <ButtonSend onClick={() => handleCancelComment(itemChild._id)}>
                  Cancel
                </ButtonSend>
              </DivUpdate>
            </DivInput>
          ) : (
            <>
              <DivContent>
                <NameUser>
                  {itemChild.userId.firstName} {itemChild.userId.lastName}
                </NameUser>
                <ContentUser>
                  <b>
                    @{itemChild.parentUserId.firstName}{' '}
                    {itemChild.parentUserId.lastName}
                  </b>{' '}
                  {itemChild.content}
                </ContentUser>
              </DivContent>
              <DivAction>
                <DivContainerAction>
                  <ReplyButton onClick={() => handleOpenReply(itemChild._id)}>
                    <MessageFilled />
                    <p>Reply</p>
                  </ReplyButton>
                </DivContainerAction>
                {open[itemChild._id] && (
                  <ReplyTextComponent
                    item={itemChild}
                    rootId={item._id}
                    setOpen={setOpen}
                  />
                )}
              </DivAction>
            </>
          )}
        </ColRightComment>
        <Col span={1}>
          {JSON.parse(localStorage.getItem('userInfo'))._id ===
            itemChild.userId._id &&
            !input[itemChild._id] && (
              <DivActionComment className="open-action-comment">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="edit">
                        <ButtonComment
                          onClick={() =>
                            handleClickAction('UPDATE', itemChild._id)
                          }>
                          Edit
                        </ButtonComment>
                      </Menu.Item>
                      <Menu.Item key="delete">
                        <ButtonComment
                          onClick={() =>
                            handleClickAction('DELETE', itemChild._id)
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
        </Col>
      </RowComment>
    </DivDetailCommentReply>
  );
}

export default ReplyComment;
