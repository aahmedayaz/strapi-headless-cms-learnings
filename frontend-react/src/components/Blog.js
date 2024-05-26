import React from "react";

const Blog = ({ title, description, imgSrc, date, author, category }) => {
  const truncatedTitle =
    title.length > 75 ? `${title.substring(0, 75)}...` : title;
  let colors = [
    { text: "text-[#34d399]", border: "border border-[#34d399]" },
    { text: "text-[#db2777]", border: "border border-[#db2777]" },
    { text: "text-[#0ea5e9]", border: "border border-[#0ea5e9]" },
  ];
  let random = Math.floor(Math.random() * colors.length);
  let color = colors[random]

  return (
    <div className="flex flex-col border justify-between rounded-b-lg  rounded- border-[#bcbcbc] relative">
      <img
        src={imgSrc}
        alt="Thumbnail"
        className="h-[200px] border-b border-b-[#bcbcbc]"
      />
      <h1 className="text-lg font-bold pb-[5px] px-[8px]">{truncatedTitle}</h1>
      <span className={`text-xs self-start mb-[15px] px-[15px] py-[2px] ml-[8px] rounded-lg ${color.text} ${color.border}`}>
        {category}
      </span>
      <div className="flex justify-between items-center text-xs px-[8px] pb-[10px] w-full">
        <span>{date}</span>
        <span>By : {author}</span>
      </div>
    </div>
  );
};

export default Blog;
