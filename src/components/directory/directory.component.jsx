import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          
          title: 'womens',
          imageUrl: 'https://i.ibb.co/kcmZ5kW/women.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          
          title: 'mens',
          imageUrl: 'https://i.ibb.co/3SX3hcx/men.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/n0KZpBj/sneakers.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/NmGstvW/hats.jpg',
          id: 1,
          linkUrl: 'hats'
          
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/1bCrp8b/Collection-of-leather-jackets-on-hangers-in-the-shop-for-biker-s-or-motorcycle-jackets.jpg',
          id: 2,
          linkUrl: ''
          
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
