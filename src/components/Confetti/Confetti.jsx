import React from "react";

export const Confetti = () => {
  import PropTypes from "prop-types";
  import sizeMe from "react-sizeme";
  import Confetti from "react-confetti";

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
    height: "100vh"
  };

  const DimensionedExample = sizeMe({
    monitorHeight: true,
    monitorWidth: true
  })(
    class Example extends React.PureComponent {
      state = {
        animationDone: true
      };

      static propTypes = {
        size: PropTypes.shape({
          width: PropTypes.number,
          height: PropTypes.number
        })
      };

      componentDidMount() {
        setTimeout(() => {
          this.toggleConfetti();
        }, 30000);
      }

      toggleConfetti = () => {
        this.setState({animationDone: !this.state.animationDone});
      };

      render() {
        return (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <Confetti
              gravity={0.1}
              run={this.state.animationDone}
              numberOfPieces={200}
              {...this.props.size}
            />
          </div>
        );
      }
    }
  );
}
