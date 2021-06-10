import React from "react";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu.component";
import MenutItem from "../../components/menu-item/MenuItem.component";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
