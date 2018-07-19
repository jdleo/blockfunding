'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/j/blockfunding/components/ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ETH',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        floated: 'right',
        content: 'Contribute',
        icon: 'right arrow',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { as: 'div', labelPosition: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'dollar sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Label, { as: 'a', basic: true, pointing: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, (this.props.ethPrice * parseFloat(this.state.value)).toFixed(2))));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiSWNvbiIsIkxhYmVsIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwiZXRoUHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFPLEFBQVMsQUFBUSxBQUFNOztBQUM1QyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUNKO2FBQVEsQUFDQyxBQUNQO29CQUZNLEFBRVEsQUFDZDtlQUFTLEEsQUFISDtBQUFBLEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRUE7O0FBSEcsMkJBR1Esd0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0IsQUFFckM7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBTHJCLEFBS1QsQUFBYyxBQUE4Qjs7Z0NBTG5DO2dDQUFBO3VCQVFnQixjQUFBLEFBQUssSUFSckIsQUFRZ0IsQUFBUzs7bUJBQTFCO0FBUkMsb0NBQUE7Z0NBQUE7Z0NBVUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVo5QixBQVVELEFBQW1DLEFBRWhDLEFBQW1DO0FBRkgsQUFDdkMsaUJBREk7O21CQUtOOzsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFmaEMsQUFlUCxBQUE2Qzs7Z0NBZnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQWtCTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWxCeEIsQUFrQkwsQUFBYyxBQUFtQjs7bUJBR3JDOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxPQXJCdEIsQUFxQlQsQUFBYyxBQUF3Qjs7bUJBckI3QjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXlCRjttQkFDUDs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUFwQyxBQUFTLEFBQWMsQUFBb0I7QUFGdkQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQVZGLEFBVUUsQUFDQTtBQURBOzBCQUNBLEFBQUM7aUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO2lCQUZGLEFBRVUsQUFDUjtpQkFIRixBQUdVLEFBQ1I7Y0FKRixBQUlPLEFBQ0w7dUJBTEYsQUFLZ0I7O29CQUxoQjtzQkFYRixBQVdFLEFBT0E7QUFQQTtBQUNFLDBCQU1GLEFBQUMseUNBQU8sSUFBUixBQUFXLE9BQU0sZUFBakIsQUFBK0I7b0JBQS9CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLE1BQVI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQyx3Q0FBTSxJQUFQLEFBQVUsS0FBSSxPQUFkLE1BQW9CLFVBQXBCLEFBQTZCO29CQUE3QjtzQkFBQSxBQUNHO0FBREg7VUFDSSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsV0FBVyxLQUFBLEFBQUssTUFBdkMsQUFBdUIsQUFBc0IsUUFBN0MsQUFBcUQsUUF4QjlELEFBQ0UsQUFrQkUsQUFJRSxBQUNHLEFBQTZELEFBS3ZFOzs7OztBQTlEMEIsQSxBQWlFN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ovYmxvY2tmdW5kaW5nIn0=