import "./hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <div className="button1">
            <button>Shop Now</button>
          </div>
          <div className="button2">
            <button>Category</button>
          </div>
        </div>
        <div className="shop">
          <p>Also Available On</p>
          <div className="shops">
            <div className="flipkart-logo">
              <img src="/public/images/flipkart.svg " alt="flipkart-logo" />
            </div>
            <div className="amazon-logo">
              <img src="/public/images/amazon.svg" alt="amazon-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/public/images/shoe_image.png" alt="shoe-image" />
      </div>
    </div>
  );
}

export default Hero;
