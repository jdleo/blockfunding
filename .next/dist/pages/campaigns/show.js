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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/j/blockfunding/pages/campaigns/show.js?entry';

var fetch = require('node-fetch');

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
        header: _web2.default.utils.fromWei(minimumContribution, 'ether') + ' ETH',
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
        header: _web2.default.utils.fromWei(balance, 'ether') + ' ETH',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsImZldGNoIiwicmVxdWlyZSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYXBwcm92ZXJzQ291bnQiLCJyZXF1ZXN0c0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImV0aFByaWNlIiwiY2FtcGFpZ24iLCJxdWVyeSIsInVybCIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJyZXNwb25zZSIsImpzb24iLCJVU0QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU07O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7Ozs7QUFDM0IsSUFBTSxRQUFOLEFBQU0sQUFBUTs7SUFFUixBOzs7Ozs7Ozs7OztrQ0FxQlU7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFVixpQkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJViw2QkFKVSxBQUlWO1VBSlUsQUFLVix3QkFMVSxBQUtWO1VBTFUsQUFNVix1QkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUMsY0FMRSxBQUNaLEFBSVMsQUFBZTtBQUp4QixBQUNFLE9BRlU7Z0JBUUMsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLHFCQUE5QixBQUFXLEFBQXdDLFdBRHJELEFBRUU7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBZlUsQUFZWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBcEJVLEFBaUJaLEFBR2U7QUFIZixBQUNFO2dCQUtXLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUE5QixBQUFXLEFBQTRCLFdBRHpDLEFBRUU7Y0FGRixBQUVRLEFBQ047cUJBekJKLEFBQWMsQUFzQlosQUFHZSxBQUlqQjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDRixxQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUVSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMsVUFBVSxLQUFBLEFBQUssTUFBNUQsQUFBa0U7b0JBQWxFO3NCQVJOLEFBQ0UsQUFFQSxBQUlFLEFBQ0UsQUFLUDtBQUxPOzs7Ozs7MkcsQUFyRXFCOzs7OzttQkFDckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCLEFBQ2hDO0Esc0JBQU0sQTs7dUJBQ1UsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0E7O3VCQUVpQixNQUFBLEFBQU0sQTs7bUJBQXZCO0E7O3VCQUNhLFNBQUEsQUFBUyxBOzttQkFBdEI7QTs7NEJBR00sS0FETCxBQUNVLEFBQ2Y7MkJBQVMsTUFBQSxBQUFNLE1BRlYsQUFFZ0IsQUFDckI7dUNBQXFCLFFBSGhCLEFBR2dCLEFBQVEsQUFDN0I7MkJBQVMsUUFKSixBQUlJLEFBQVEsQUFDakI7aUNBQWUsUUFMVixBQUtVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTlgsQUFNVyxBQUFRLEFBQ3hCOzJCQUFTLFFBQUEsQUFBUSxBLEFBUFo7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWHFCLEEsQUErRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ovYmxvY2tmdW5kaW5nIn0=