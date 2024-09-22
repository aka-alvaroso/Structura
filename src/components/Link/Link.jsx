// import React from "react";
import PropTypes from "prop-types";

export default function Link ({
  children,
  color = 'black',
  href = '',
  classNames = "",
}) {

  // const colorClasses = {
  //   white: "text-white",
  //   black: "text-black",
  //   gray: "text-gray-500",
  //   red: "text-red-500",
  //   orange: "text-orangee-500",
  //   yellow: "text-yellow-500",
  //   green: "text-green-500",
  //   cyan: "text-cyan-500",
  //   blue: "text-blue-500",
  //   teal: "text-teal-500",
  //   purple: "text-purple-500",
  //   pink: "text-pink-500",

  // }

  return (
    <a href={`${href}`}
      className={`text-${color}-500 hover:underline ${classNames}`}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  color: PropTypes.string,
  classNames: PropTypes.string,
};
