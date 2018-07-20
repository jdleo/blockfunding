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