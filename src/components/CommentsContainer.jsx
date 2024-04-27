import React from "react";

const CommentData = [
  {
    name: "Adarsh",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [
      {
        name: "Adarsh",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        replies: [],
      },
      {
        name: "Adarsh",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        replies: [],
      },
    ],
  },
  {
    name: "Adarsh",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [
      {
        name: "Adarsh",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        replies: [],
      },
    ],
  },
  {
    name: "Adarsh",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [],
  },
  {
    name: "Adarsh",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [
      {
        name: "Adarsh",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        replies: [
          {
            name: "Adarsh",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Adarsh",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [],
  },
];

const Comment = ({data}) => {
  const { name, text } = data;
  return (
    <div className="flex flex-wrap p-2 my-2 bg-gray-200 rounded-lg max-w-6xl">
      <img
      width={60}
        className="w-12 h-12 mx-3"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment,index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div> 
  ))
}

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Comments:</h1>
      <CommentsList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
