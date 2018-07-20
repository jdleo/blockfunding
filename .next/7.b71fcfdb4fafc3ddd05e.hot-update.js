webpackHotUpdate(7,{

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _semanticUiReact = __webpack_require__(481);

var _Layout = __webpack_require__(1164);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1184);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1006);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1188);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/j/blockfunding/pages/campaigns/show.js?entry';

var fetch = __webpack_require__(1189);

var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          approversCount = _props.approversCount,
          requestsCount = _props.requestsCount;

      var items = [{
        header: manager,
        meta: 'Manager',
        description: 'ETH address for the manager of this campaign.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(minimumContribution, 'ether') + ' ETH  /  ' + (parseFloat(_web2.default.utils.fromWei(minimumContribution, 'ether')) * this.props.ethPrice).toFixed(2) + ' USD',
        meta: 'Minumum Contribution',
        description: 'Minimum contribution to become an approver'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Amount of approvers for this campaign'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'Amount of payment requests made by manager'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + ' ETH  /  ' + (parseFloat(_web2.default.utils.fromWei(balance, 'ether')) * this.props.ethPrice).toFixed(2) + ' USD',
        meta: 'Campaign Balance',
        description: 'Total amount of ETH available for spending'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, ethPrice: this.props.ethPrice, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, url, summary, response, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
                _context.next = 4;
                return campaign.methods.getSummary().call();

              case 4:
                summary = _context.sent;
                _context.next = 7;
                return fetch(url);

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.json();

              case 10:
                json = _context.sent;
                return _context.abrupt('return', {
                  ethPrice: json.USD,
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsImZldGNoIiwicmVxdWlyZSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYXBwcm92ZXJzQ291bnQiLCJyZXF1ZXN0c0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInBhcnNlRmxvYXQiLCJldGhQcmljZSIsInRvRml4ZWQiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwidXJsIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInJlc3BvbnNlIiwianNvbiIsIlVTRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7OztBQUMzQixJQUFNLFFBQU4sQUFBTSxBQUFROztJQUVSLEE7Ozs7Ozs7Ozs7O2tDQXFCVTttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHdCQUxVLEFBS1Y7VUFMVSxBQU1WLHVCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBQyxjQUxFLEFBQ1osQUFJUyxBQUFlO0FBSnhCLEFBQ0UsT0FGVTtnQkFRQyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIscUJBQTlCLEFBQVcsQUFBd0MseUJBQW9CLENBQUMsV0FBVyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIscUJBQTlCLEFBQVcsQUFBd0MsWUFBWSxLQUFBLEFBQUssTUFBckUsQUFBMkUsVUFBM0UsQUFBcUYsUUFBNUosQUFBdUUsQUFBNkYsS0FEdEssQUFFRTtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFwQlUsQUFpQlosQUFHZTtBQUhmLEFBQ0U7Z0JBS1csY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBQTlCLEFBQVcsQUFBNEIseUJBQW9CLENBQUMsV0FBVyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FBOUIsQUFBVyxBQUE0QixZQUFZLEtBQUEsQUFBSyxNQUF6RCxBQUErRCxVQUEvRCxBQUF5RSxRQUFwSSxBQUEyRCxBQUFpRixLQUQ5SSxBQUVFO2NBRkYsQUFFUSxBQUNOO3FCQXpCSixBQUFjLEFBc0JaLEFBR2UsQUFJakI7QUFQRSxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0YscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBREYsQUFDRSxBQUNHLEFBQUssQUFFUixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxTQUFTLFVBQVUsS0FBQSxBQUFLLE1BQTVELEFBQWtFO29CQUFsRTtzQkFSTixBQUNFLEFBRUEsQUFJRSxBQUNFLEFBS1A7QUFMTzs7Ozs7OzJHLEFBckVxQjs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQSxBQUNoQztBLHNCLEFBQU07O3VCQUNVLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O21CQUE5QztBOzt1QkFFaUIsTUFBQSxBQUFNLEE7O21CQUF2QjtBOzt1QkFDYSxTQUFBLEEsQUFBUzs7bUJBQXRCO0E7OzRCQUdNLEtBREwsQUFDVSxBQUNmOzJCQUFTLE1BQUEsQUFBTSxNQUZWLEFBRWdCLEFBQ3JCO3VDQUFxQixRQUhoQixBQUdnQixBQUFRLEFBQzdCOzJCQUFTLFFBSkosQUFJSSxBQUFRLEFBQ2pCO2lDQUFlLFFBTFYsQUFLVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQU5YLEFBTVcsQUFBUSxBQUN4QjsyQkFBUyxRQVBKLEFBT0ksQUFBUSxBO0FBUFosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhxQixBLEFBK0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qL2Jsb2NrZnVuZGluZyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/j/blockfunding/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/j/blockfunding/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5iNzFmY2ZkYjRmYWZjM2RkZDA1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MDYxYTJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q2FyZCwgR3JpZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9taW4tYXBpLmNyeXB0b2NvbXBhcmUuY29tL2RhdGEvcHJpY2U/ZnN5bT1FVEgmdHN5bXM9VVNEXCI7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV0aFByaWNlOiBqc29uLlVTRCxcbiAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyQ2FyZHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFsYW5jZSxcbiAgICAgIG1hbmFnZXIsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgYXBwcm92ZXJzQ291bnQsXG4gICAgICByZXF1ZXN0c0NvdW50XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiAnTWFuYWdlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRVRIIGFkZHJlc3MgZm9yIHRoZSBtYW5hZ2VyIG9mIHRoaXMgY2FtcGFpZ24uJyxcbiAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYCR7d2ViMy51dGlscy5mcm9tV2VpKG1pbmltdW1Db250cmlidXRpb24sICdldGhlcicpfSBFVEggIC8gICR7KHBhcnNlRmxvYXQod2ViMy51dGlscy5mcm9tV2VpKG1pbmltdW1Db250cmlidXRpb24sICdldGhlcicpKSAqIHRoaXMucHJvcHMuZXRoUHJpY2UpLnRvRml4ZWQoMil9IFVTRGAsXG4gICAgICAgIG1ldGE6ICdNaW51bXVtIENvbnRyaWJ1dGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWluaW11bSBjb250cmlidXRpb24gdG8gYmVjb21lIGFuIGFwcHJvdmVyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Ftb3VudCBvZiBhcHByb3ZlcnMgZm9yIHRoaXMgY2FtcGFpZ24nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Ftb3VudCBvZiBwYXltZW50IHJlcXVlc3RzIG1hZGUgYnkgbWFuYWdlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYCR7d2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpfSBFVEggIC8gICR7KHBhcnNlRmxvYXQod2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpKSAqIHRoaXMucHJvcHMuZXRoUHJpY2UpLnRvRml4ZWQoMil9IFVTRGAsXG4gICAgICAgIG1ldGE6ICdDYW1wYWlnbiBCYWxhbmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUb3RhbCBhbW91bnQgb2YgRVRIIGF2YWlsYWJsZSBmb3Igc3BlbmRpbmcnXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsczwvaDM+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSBldGhQcmljZT17dGhpcy5wcm9wcy5ldGhQcmljZX0vPlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBc0JBO0FBT0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUVBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBSUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFLQTtBQUxBOzs7Ozs7Ozs7OztBQXBFQTtBQUFBOzs7QUFFQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=