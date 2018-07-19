webpackHotUpdate(5,{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(450);

var _campaign = __webpack_require__(681);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(525);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(675);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/j/blockfunding/components/ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/j/blockfunding/components/ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NWE3N2UwZTllYzZjMDhiY2EzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz8xZGNmOTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uLCBJY29uLCBMYWJlbH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmNsYXNzIENvbnRyaWJ1dGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcbiAgICAgIH0pO1xuXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnfSk7XG5cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIGxhYmVsPVwiRVRIXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfS8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICBjb250ZW50PVwiQ29udHJpYnV0ZVwiXG4gICAgICAgICAgaWNvbj1cInJpZ2h0IGFycm93XCJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiBhcz0nZGl2JyBsYWJlbFBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgPEJ1dHRvbiBpY29uPlxuICAgICAgICAgICAgPEljb24gbmFtZT0nZG9sbGFyIHNpZ24nIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPExhYmVsIGFzPSdhJyBiYXNpYyBwb2ludGluZz0nbGVmdCc+XG4gICAgICAgICAgICB7KHRoaXMucHJvcHMuZXRoUHJpY2UgKiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUudmFsdWUpKS50b0ZpeGVkKDIpfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7QUFRQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9