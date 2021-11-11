import React from "react";
import PropTypes from "prop-types";

export const Title = (props) => {
    return (
        <div style={{backgroundColor: props.background}}>
            <h1>{props.label}</h1>
        </div>
    );
};

Title.propTypes = {
    label: PropTypes.string,
};
Title.defaultProps = {
    label: "Title"
};

export default Title;