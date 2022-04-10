import PropTypes from "prop-types";

function SuggestedProfile({ userDocId, username, profileId, userId }) {
  console.log("dupa2");
  return (
    <div>
      <p>{username}</p>
    </div>
  );
}

export default SuggestedProfile;

SuggestedProfile.prototype = {
  userDocId: PropTypes.string,
  username: PropTypes.string,
  profileId: PropTypes.string,
  userId: PropTypes.string,
};
