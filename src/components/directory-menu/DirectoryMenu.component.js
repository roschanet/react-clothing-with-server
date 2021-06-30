import React from "react";
import { connect } from "react-redux";
import "./directory-menu.styles.scss";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/MenuItem.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
