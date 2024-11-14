'use client';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: 'purple', color: 'white' }}>
    <div className="container py-4">
      <div className="row">

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">NAVIGATION</h5>
          <hr style={{ borderColor: 'white' }} />
          <p>About Us</p>
          <p>Employment</p>
          <p>Pictures</p>
        </div>

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">MAIN MENU</h5>
          <hr style={{ borderColor: 'white' }} />
          <p>Products</p>
          <p>Custom Order</p>
          <p>Business Inquiry</p>
        </div>

        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">CONNECT</h5>
          <hr style={{ borderColor: 'white' }} />
          <p>Sign up for the latest updates</p>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
              />
              <button className="btn btn-dark" type="submit">Join</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <div className="text-center py-2">
      <p> Here for all your 3D printing needs!</p>
    </div>
  </footer>
);

export default Footer;
