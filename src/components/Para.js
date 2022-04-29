 import React, { useState, useEffect } from "react";
 import classNames from "classnames";

 const isMobile = () => {
   const ua = navigator.userAgent;
   return /Android|Mobi/i.test(ua);
 };

 const Para = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [clicked, setClicked] = useState(false);
   const [linkHovered, setLinkHovered] = React.useState(false);
   const [allHovered, setAllHovered] = React.useState(false);
   const [hidden, setHidden] = useState(false);

   const addEventListeners = React.useCallback(() => {
     document.addEventListener("mousemove", onMouseMove);
     document.addEventListener("mouseenter", onMouseEnter);
     document.addEventListener("mouseleave", onMouseLeave);
     document.addEventListener("mousedown", onMouseDown);
     document.addEventListener("mouseup", onMouseUp);
   }, []);

   const removeEventListeners = React.useCallback(() => {
     document.removeEventListener("mousemove", onMouseMove);
     document.removeEventListener("mouseenter", onMouseEnter);
     document.removeEventListener("mouseleave", onMouseLeave);
     document.removeEventListener("mousedown", onMouseDown);
     document.removeEventListener("mouseup", onMouseUp);
   }, []);

   useEffect(() => {
     addEventListeners();
     handleLinkHoverEvents();
     handleAllHoverEvents();
     return () => removeEventListeners();
   }, [addEventListeners, removeEventListeners]);

   const onMouseMove = (e) => {
     setPosition({ x: e.clientX, y: e.clientY });
   };

   const onMouseDown = () => {
     setClicked(true);
   };

   const onMouseUp = () => {
     setClicked(false);
   };

   const onMouseLeave = () => {
     setHidden(true);
   };

   const onMouseEnter = () => {
     setHidden(false);
   };

   const handleLinkHoverEvents = () => {
     document.querySelectorAll("a").forEach((el) => {
       el.addEventListener("mouseover", () => setLinkHovered(true));
       el.addEventListener("mouseout", () => setLinkHovered(false));
     });
   };

   const handleAllHoverEvents = () => {
     document.querySelectorAll("h1").forEach((el) => {
       el.addEventListener("mouseover", () => setAllHovered(true));
       el.addEventListener("mouseout", () => setAllHovered(false));
     });
   };

   const cursorClasses = classNames("cursor", {
     "cursor--clicked": clicked,
     "cursor--hidden": hidden,
     "cursor--link-hovered": linkHovered,
     "cursor--all-hovered": allHovered,
   });

   if (typeof navigator !== "undefined" && isMobile()) return null;

   return (
     <div className="myPara">
       <div
         className={cursorClasses}
         style={{ left: `${position.x}px`, top: `${position.y}px` }}
       />
     </div>
   );
 };


 export default Para 
 
