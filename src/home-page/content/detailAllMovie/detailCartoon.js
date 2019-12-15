import React, { Component } from "react";
import {
  IoIosStar,
  IoLogoApple,
  IoLogoAndroid,
  IoLogoWindows,
  IoMdTv,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoVk,
  IoIosCart
} from "react-icons/io";
import CommentComponent from "../commentMovie/commentComponent";
import * as action from "../../../redux/action/indexAPI";
import { connect } from "react-redux";

class DetailCartoon extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailCartoon(id);
    window.scrollTo(0, 0);
  }

  render() {
    let { Cartoon } = this.props;
    console.log(Cartoon);

    return (
      <section>
        {/* details content */}
        <div
          className="section details"
          style={{
            background: "url(/image/covers/slide-3.png) no-repeat center/cover"
          }}
        >
          <div className="container">
            <div className="row">
              {/* title */}
              <div className="col-12">
                <h1 className="details__title">{Cartoon.nameCartoon}</h1>
              </div>
              {/* end title */}
              {/* content */}
              <div className="col-12 col-xl-6">
                <div className="card card--details">
                  <div className="row">
                    {/* card cover */}
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                      <div className="card__cover">
                        <img src={Cartoon.imgCartoon} alt="" />
                        <a href="#" className="addToCart__btn">
                          Add to{" "}
                          <i
                            style={{
                              fontSize: "20px",
                              textAlign: "center",
                              padding: "0 0 3px 5px"
                            }}
                          >
                            <IoIosCart />
                          </i>
                        </a>
                      </div>
                    </div>
                    {/* end card cover */}
                    {/* card content */}
                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                      <div className="card__content" style={{ marginTop: "0" }}>
                        <div className="card__wrap">
                          <span className="card__rate">
                            <i
                              style={{
                                color: "rgb(255,88,96)",
                                textAlign: "center"
                              }}
                            >
                              <IoIosStar />
                            </i>
                            {Cartoon.rateCartoon}
                          </span>
                          <ul className="card__list">
                            <li>HD</li>
                            <li>16+</li>
                          </ul>
                        </div>
                        <ul className="card__meta">
                          <li>
                            <span>Tag:</span> <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </li>
                          <li>
                            <span>Release year:</span> 2017
                          </li>
                          <li>
                            <span>Running time:</span> 120 min
                          </li>
                          <li>
                            <span>Country:</span> <a href="#">USA</a>{" "}
                          </li>
                        </ul>
                        <div className="card__description card__description--details">
                          {Cartoon.description}
                        </div>
                      </div>
                    </div>
                    {/* end card content */}
                  </div>
                </div>
              </div>
              {/* end content */}
              {/* player */}
              <div className="col-12 col-xl-6">
                <iframe
                  width="560"
                  height="315"
                  src={Cartoon.trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* end player */}
              <div className="col-12">
                <div className="details__wrap">
                  {/* availables */}
                  <div className="details__devices">
                    <span className="details__devices-title">
                      Available on devices:
                    </span>
                    <ul className="details__devices-list">
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoApple />
                        </i>
                        <span>IOS</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoAndroid />
                        </i>
                        <span>Android</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoWindows />
                        </i>
                        <span>Windows</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoMdTv />
                        </i>
                        <span>Smart TV</span>
                      </li>
                    </ul>
                  </div>
                  {/* end availables */}
                  {/* share */}
                  <div className="details__share">
                    <span className="details__share-title">
                      Share with friends:
                    </span>
                    <ul className="details__share-list">
                      <li className="facebook">
                        <a href="#">
                          <i style={{ color: "#3b5999" }}>
                            <IoLogoFacebook />
                          </i>
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="#">
                          <i style={{ color: "#ff5860" }}>
                            <IoLogoInstagram />
                          </i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i style={{ color: "#1da1f2" }}>
                            <IoLogoTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="vk">
                        <a href="#">
                          <i style={{ color: "#45668e" }}>
                            <IoLogoVk />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end share */}
                </div>
              </div>
            </div>
          </div>
          {/* end details content */}
        </div>
        <CommentComponent />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    Cartoon: state.movieReducer.Cartoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailCartoon: id => {
      dispatch(action.actDetailCartoonAPI(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCartoon);
