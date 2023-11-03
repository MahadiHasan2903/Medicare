import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleStarHover = (starIndex) => {
    setHover(starIndex);
  };

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            const starNumber = index + 1;
            const isFilled = starNumber <= (hover || rating);

            return (
              <button
                key={starNumber}
                type="button"
                className={`${
                  isFilled ? "text-yellowColor" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px cursor-pointer] mr-[10px]`}
                onClick={() => handleStarClick(starNumber)}
                onMouseEnter={() => handleStarHover(starNumber)}
                onMouseLeave={() => handleStarHover(rating)}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <h3>Share your feedback or suggestions</h3>
        <textarea
          className="border mt-5 border-solid border-[#0066ff34] focus:outline  outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message...."
          rows="5"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
