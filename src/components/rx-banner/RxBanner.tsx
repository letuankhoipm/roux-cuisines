import "./RxBanner.scss";

function RxBanner() {
  return (
    <div className="rx-banner-wrapper">
      <div className="rx-banner h-100 py-4">
        <div className="container h-100 d-flex justify-content-center py-4">
          <div className="container-fluid d-flex">
            <div className="row align-self-end justify-content-center">
              <img
                className="rx-sign"
                src={`${process.env.PUBLIC_URL}/assets/images/rx_3.png`}
                alt="sign"
              />
              <h1 className="rx-title ">
                Enjoy your life with delicious cuisines!
              </h1>
              <button className="rx-button-outlined">
                <img
                  className="rx-arrow"
                  src={`${process.env.PUBLIC_URL}/assets/images/rx_2.png`}
                  alt="arrow_down"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RxBanner;
