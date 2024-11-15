import React from "react";
import PropTypes from "prop-types";

const Child3 = (props) => {
  return (
    <div>
      Student Name is:{props.name} and College is:{props.college}
    </div>
  );
};

Child3.defaultProps = {
  college: "AKTU",
  name: "XYZ",
};
Child3.propTypes = {
  college: PropTypes.string.isRequired,
  name: PropTypes.number,
};
export default Child3;
