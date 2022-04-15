import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Image from "./image";

function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
    </div>
  );
}

export default Post;

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string,
    imageSrc: PropTypes.string,
    caption: PropTypes.string,
    docId: PropTypes.string,
    userLikedPhoto: PropTypes.bool,
    likes: PropTypes.array,
    commets: PropTypes.array,
    dateCreated: PropTypes.number,
  }),
};
