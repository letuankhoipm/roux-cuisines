import "./RxItem.scss";

interface RxItemProps {
  id: number;
  title?: string;
  src: string;
  shortDesc?: string;
  longDesc?: string;
  link?: string;
  action?: string;
}

function RxItem(props: RxItemProps) {
  return (
    <div className="rx-item">
      <div className="rx-item-main">
        <div className="rx-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="rx-gr-btn d-flex h-100">
                <button className="rx-button-rd align-self-end">
                  REGISTER NOW!
                </button>
              </div>
            </div>
            <div className="col-9">
              <div className="rx-illus">
                <img className="rx-img" src={props.src} alt="item" />
              </div>
            </div>
            <div className="col-6 rx-sub-title">
              <h1 className="rx-cookie">Membership !</h1>
            </div>
            <div className="col-6 rx-title">
              Generate Lorem Ipsum placeholder text. Select the number of
              characters, words
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RxItem;
