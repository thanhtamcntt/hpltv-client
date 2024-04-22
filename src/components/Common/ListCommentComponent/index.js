import { useState } from 'react';
import {
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
  DivActionComment,
  DivContainerAction,
  ButtonComment,
  DivInput,
  DivUpdate,
  ButtonSend,
} from './styles';
import { Dropdown, Space, Col, Menu, Input, Button } from 'antd';
import { MessageFilled, EllipsisOutlined } from '@ant-design/icons';
import ReplyTextComponent from '../ReplyTextComponent';
const { TextArea } = Input;

function ListCommentComponent({
  item,
  open,
  setOpen,
  handleOpenReply,
  handleClickAction,
  input,
  setInput,
  updateCommentClick,
}) {
  const [value, setValue] = useState(item.content);

  const handleUpdateComment = (id) => {
    updateCommentClick(value, id);
  };
  const handleCancelComment = (id) => {
    setInput((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <DivDetailComment className="detail-comment">
      <RowComment>
        <ColLeftComment span={2}>
          <AvatarUserComment src={item.userId.avatarUser.url} />
        </ColLeftComment>
        <ColRightComment span={21}>
          {input[item._id] ? (
            <DivInput>
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <DivUpdate>
                <ButtonSend onClick={() => handleUpdateComment(item._id)}>
                  Update
                </ButtonSend>
                <ButtonSend onClick={() => handleCancelComment(item._id)}>
                  Cancel
                </ButtonSend>
              </DivUpdate>
            </DivInput>
          ) : (
            <>
              <DivContent>
                <NameUser>
                  {item.userId.firstName} {item.userId.lastName}
                </NameUser>
                <ContentUser>{item.content}</ContentUser>
              </DivContent>
              <DivAction>
                <DivContainerAction>
                  <ReplyButton onClick={() => handleOpenReply(item._id)}>
                    <MessageFilled />
                    <p>Reply</p>
                  </ReplyButton>
                </DivContainerAction>
                {open[item._id] && (
                  <ReplyTextComponent
                    item={item}
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
            item.userId._id &&
            !input[item._id] && (
              <DivActionComment className="open-action-comment">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="edit">
                        <ButtonComment
                          onClick={() => handleClickAction('UPDATE', item._id)}>
                          Edit
                        </ButtonComment>
                      </Menu.Item>
                      <Menu.Item key="delete">
                        <ButtonComment
                          onClick={() => handleClickAction('DELETE', item._id)}>
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
    </DivDetailComment>
  );
}

export default ListCommentComponent;
