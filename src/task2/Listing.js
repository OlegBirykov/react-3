import PropTypes from 'prop-types';

function Listing(props) {
  const { items } = props;
  const list = items.map(({ listing_id, url, MainImage, title, currency_code, price, quantity }) => 
    <div className="item" key={listing_id}>
        <div className="item-image">
          <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
            <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg" alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">Woodland Fairy</p>
          <p className="item-price">$3.99</p>
          <p className="item-quantity level-medium">12 left</p>
        </div>
    </div>
  );

  return (
    <div className="item-list">
      {list}
    </div>
  );
}

Listing.defaultProps = {
  items: []
}; 

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Listing;
