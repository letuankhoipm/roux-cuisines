import "./RxCuisines.scss";

function RxCuisines() {
  return (
    <div className="rx-cuisines-main">
      <div className="rx-cover">
        <img
          className="rx-cover-content"
          src={`${process.env.PUBLIC_URL}/assets/images/a1.png`}
          alt="cover_img"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="rx-content d-flex">
              <div className="w-100 align-self-end rx-text">
                <div className="rx-title ">Ambrosia Salad</div>
                <div className="rx-description d-flex justify-content-center">
                  <p>
                    Ambrosia salad is a creamy fruit salad loaded with
                    pineapple, mandarin oranges, coconut and miniature
                    fruit-flavored marshmallows.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="rx-button-nd">EXPORE NOW !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RxCuisines;
