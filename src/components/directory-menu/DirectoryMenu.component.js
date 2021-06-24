import React from "react";
import MenuItem from "../menu-item/MenuItem.component";
import './directory-menu.styles.scss';

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "topi",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/topi",
        },
        {
          title: "jaket",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sepatu",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "wanita",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "pria",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem
            key={id}
            {...otherSectionsProps}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
