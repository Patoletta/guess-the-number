import React from "react";
import PropTypes from "prop-types";
import {Button as RBButton} from "react-bootstrap";

export const Button = (props) => {
    return (
        <RBButton variant={props.variant}>{props.label}</RBButton>
    );
};

Button.propTypes = {
    variant: PropTypes.string, 
    label: PropTypes.string
};
Button.defaultProps = {
    variant: "light",
    label: "Button"
};

export default Button;