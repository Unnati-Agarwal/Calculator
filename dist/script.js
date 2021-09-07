const isOperator = /[x/+‑]/;
const endswith = /[=]$/;

const operatorStyle = { background: '#666666' };
const clearStyle = { background: '#ac3939', width: 153 };
const zeroStyle = { width: 153 };
const equalStyle = { background: '#004466', height: 104, position: 'absolute' };


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ques: '',
      ans: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "frame" }, /*#__PURE__*/
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement(Output, { ans: this.state.ans, ques: this.state.ques }), /*#__PURE__*/
      React.createElement("div", { className: "button-row" }, /*#__PURE__*/
      React.createElement(Button, { label: "AC", style: clearStyle, value: "AC", id: "clear", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "/", style: operatorStyle, value: "/", id: "divide", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "*", style: operatorStyle, value: "*", id: "multiply", handleClick: this.handleClick })), /*#__PURE__*/

      React.createElement("div", { className: "button-row" }, /*#__PURE__*/
      React.createElement(Button, { label: "7", value: "7", id: "seven", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "8", value: "8", id: "eight", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "9", value: "9", id: "nine", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "+", style: operatorStyle, value: "+", id: "add", handleClick: this.handleClick })), /*#__PURE__*/

      React.createElement("div", { className: "button-row" }, /*#__PURE__*/
      React.createElement(Button, { label: "4", value: "4", id: "four", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "5", value: "5", id: "five", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "6", value: "6", id: "six", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "-", style: operatorStyle, value: "-", id: "subtract", handleClick: this.handleClick })), /*#__PURE__*/

      React.createElement("div", { className: "button-row" }, /*#__PURE__*/
      React.createElement(Button, { label: "1", value: "1", id: "one", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "2", value: "2", id: "two", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "3", value: "3", id: "three", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: "=", style: equalStyle, value: "=", id: "equals", handleClick: this.handleClick })), /*#__PURE__*/

      React.createElement("div", { className: "button-row" }, /*#__PURE__*/
      React.createElement(Button, { label: "0", style: zeroStyle, value: "0", id: "zero", handleClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Button, { label: ".", value: ".", id: "decimal", handleClick: this.handleClick })))));




  }
  handleClick(event) {

    const value = event.target.value;

    switch (value) {
      case '=':{
          if (this.state.ques !== '')
          {
            var answer = '';
            try {
              answer = eval(this.state.ques);
            }
            catch (err)
            {
              this.setState({ ans: "Math Error" });
            }
            if (answer === undefined)
            this.setState({ ans: "Math Error" });else

            this.setState({ ans: answer });
          }
          break;

        }
      case 'AC':{
          this.setState({ ques: '', ans: '' });
          break;
        }
      default:{
          if (this.state.ans !== '')
          this.setState({ ques: this.state.ans += value, ans: '' });else

          this.setState({ ques: this.state.ques += value });
          break;
        }}

  }}

const Display = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "screen-row" }, /*#__PURE__*/
    React.createElement("input", { type: "text", id: props.id, readOnly: true, value: props.value })));


};
const Output = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "screen" }, /*#__PURE__*/
    React.createElement(Display, { value: props.ques }), /*#__PURE__*/
    React.createElement(Display, { id: "display", value: props.ans })));


};
const Button = props => {
  return /*#__PURE__*/(
    React.createElement("input", { type: "button", id: props.id, value: props.label, onClick: props.handleClick, style: props.style }));

};
ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));