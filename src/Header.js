import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";

function Header() {
  return (
    <>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
      ;
    </>
  );
}

export default Header;
