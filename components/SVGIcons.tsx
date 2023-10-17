import React from "react";

interface ISVGProps {
  color?: string;
  className?: string;
}

export const BuildingIcon: React.FC<ISVGProps> = ({ color, className }) => (
  <svg
    fill={color ? color : "currentColor"}
    className={className ? className : ""}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" />
  </svg>
);

export const FolderCloseIcon: React.FC<ISVGProps> = ({ color, className }) => (
  <svg
    fill={color ? color : "currentColor"}
    className={className ? className : ""}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
  </svg>
);

export const FolderOpenIcon: React.FC<ISVGProps> = ({ color, className }) => (
  <svg
    fill={color ? color : "currentColor"}
    className={className ? className : ""}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
  </svg>
);
