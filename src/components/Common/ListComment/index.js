import { useEffect, useState } from 'react';
import { DivListComment, NoCommentTitle } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReplyComment from '../ReplyCommentComponent';
import ListCommentComponent from '../ListCommentComponent';
import {
  deleteComment,
  updateComment,
} from '../../../redux/action/comment/comment';
import { useDispatch } from 'react-redux';
import LoadingComponent from '../../Common/LoadingComponent';

function ListComment({ dataComment }) {
  const [data, setData] = useState();
  const [length, setLength] = useState(5);
  const [dataReverse, setDataReverse] = useState();
  const [open, setOpen] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (dataComment) {
      const reversedData = [...dataComment].reverse();
      const newData = dataComment.slice(0, length);
      setData(newData);
      setDataReverse(reversedData);
    }
  }, [length, dataComment]);

  const handleOpenReply = (commentId) => {
    if (commentId) {
      setOpen((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    }
  };

  const handleClickAction = (action, id) => {
    console.log(action, id);
    if (action === 'DELETE') {
      dispatch(deleteComment(id));
    } else {
      setInput((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const updateCommentClick = (value, id) => {
    const data = {
      commentId: id,
      content: value,
    };
    dispatch(updateComment(data));
    setInput((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const fetchMoreData = () => {
    setLength((prevLength) => prevLength + 5);
  };

  if (!dataComment) {
    return <LoadingComponent />;
  }

  return (
    <>
      {data && data.length > 0 ? (
        <DivListComment id="listComment">
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            endMessage={<p>All comments displayed</p>}
            scrollableTarget="listComment">
            {data &&
              data.length &&
              data.map((item, id) => {
                if (!item.parentCommentId) {
                  return (
                    <>
                      <ListCommentComponent
                        key={id}
                        item={item}
                        open={open}
                        setOpen={setOpen}
                        handleOpenReply={handleOpenReply}
                        handleClickAction={handleClickAction}
                        input={input}
                        setInput={setInput}
                        updateCommentClick={updateCommentClick}
                      />

                      {dataReverse.map((itemChild, index) => {
                        if (
                          itemChild.rootCommentId &&
                          itemChild.rootCommentId === item._id
                        ) {
                          return (
                            <ReplyComment
                              key={index}
                              item={item}
                              itemChild={itemChild}
                              open={open}
                              setOpen={setOpen}
                              handleOpenReply={handleOpenReply}
                              handleClickAction={handleClickAction}
                              input={input}
                              setInput={setInput}
                              updateCommentClick={updateCommentClick}
                            />
                          );
                        }
                      })}
                    </>
                  );
                }
              })}
          </InfiniteScroll>
        </DivListComment>
      ) : (
        <NoCommentTitle>No comments here yet</NoCommentTitle>
      )}
    </>
  );
}

export default ListComment;
