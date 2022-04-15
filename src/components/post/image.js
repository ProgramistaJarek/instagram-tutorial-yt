import PropTypes from "prop-types";

function Image({ src, caption }) {
  return <img src={src} alt={caption} />;
}

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
};
