import React, {Component} from 'react';
import styled from 'styled-components';

class Section extends Component {
  render(){

    // get the fields passed as props
    //const fields = this.props.fields;

    // component styles
    const Banner = styled.section`
      background: url('https://wp.tallwave.com/wp-content/uploads/2017/10/innovation-bg.png') center/cover no-repeat;
      .gradient-red-orange {
        background: -webkit-gradient(linear,left top,right top,from(rgba(247,87,87,.8)),to(rgba(255,164,54,.8)));
        background: -webkit-linear-gradient(left,rgba(247,87,87,.8),rgba(255,164,54,.8));
        background: -o-linear-gradient(left,rgba(247,87,87,.8),rgba(255,164,54,.8));
        background: linear-gradient(90deg,rgba(247,87,87,.8),rgba(255,164,54,.8));
      }
      p {
        font: 18px/2 'Open Sans', sans-serif;
      }
      .white {
          color: #fff;
      }
      @media screen and (max-width: 48.4375rem) {
        .container {
          padding: 80px 0;
        }
      }
    `;

    return (
      <Banner>
        <div className="jumbotron gradient-red-orange">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <h2 className="white">
                        Header Text Here
                    </h2>
                    <p className="white">
                        Subheader Text Here
                    </p>
                    </div>
                </div>
          </div>
        </div>
      </Banner>
    );
  }
}

export default Section;