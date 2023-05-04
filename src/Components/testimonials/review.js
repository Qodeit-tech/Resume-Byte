import { AiFillStar } from "react-icons/ai";

const Review = ({ rating, user, review, heading }) => {
  return (
    <div className="flex flex-col  gap-2">
      <div className="flex gap-1">
        {new Array(rating).fill("").map((_, i) => (
          <AiFillStar key={i} className={"text-blue-500 h-5 w-5"} />
        ))}
        {!!(5 - rating) &&
          new Array(5 - rating)
            .fill("")
            .map((_, i) => (
              <AiFillStar className="text-slate-400 h-5 w-5" key={i} />
            ))}
      </div>
      {<p className="text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-lg">
        lorem Ipsum is simply dummy text of the printing andr{" "}
      </p>}
      {review && <p>{review}</p>}
      <p className="text-xs text-blue-300 mt-2">{user || "Anonymous"}</p>
    </div>
  );
};

export default Review;
