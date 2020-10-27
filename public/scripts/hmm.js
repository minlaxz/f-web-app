var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var text = {
    nav: "🦄 Super Welcome!",
    imgalt: "I am from Myanmar.",
    head1: "who am i : ",
    head2: "Currently working on 🔭 ?",
    head3: "And this is 🔥🔥 .., Fire",
    head4: "My onosecond 🥴",
    head5: "My fav person"
};

function Navbar(props) {
    return React.createElement(
        "nav",
        { className: props.navclass, style: { backgroundColor: '#F5F5F5' } },
        React.createElement(
            "a",
            { id: "timenav", className: "navbar-brand", href: "#", style: { fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' } },
            React.createElement(ClockWithNavBrand, null)
        )
    );
}

function MeWithBaganCity(props) {
    return React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
            "p",
            { style: { fontSize: '10px', color: '#294659' } },
            "React's State and Lifecycle. ",
            React.createElement(
                "a",
                { href: "https://reactjs.org/docs/state-and-lifecycle.html" },
                "Learn More"
            )
        ),
        React.createElement("img", { className: "resize rounded img-thumbnail",
            src: props.myimgsrc,
            alt: text.imgalt }),
        React.createElement(
            "p",
            { style: { fontSize: '10px' } },
            " @Bagan "
        )
    );
}

function Whoami() {
    return React.createElement(
        "p",
        { className: "card-body" },
        "Hi, am ",
        React.createElement(
            "b",
            { style: { color: 'cyan' } },
            "Min Latt"
        ),
        " , from Myanmar.\uD83C\uDDF2\uD83C\uDDF2 Background \uD83D\uDCD1, B.E. EC ",
        React.createElement(
            "a",
            { href: "http://www.ttu.edu.mm/" },
            "(@TTU)"
        ),
        "Programmings ",
        React.createElement(
            "code",
            null,
            "Python \uD83D\uDC0D, C \uD83E\uDD14 "
        ),
        ". Also ",
        React.createElement(
            "code",
            null,
            "Web \uD83D\uDD78, Bash, Etc.."
        )
    );
}

function CurrentlyWorkingOn() {
    return React.createElement(
        "p",
        { className: "card-body" },
        "\uD83D\uDC4C, here's my ",
        React.createElement(
            "a",
            { href: "https://github.com/minlaxz" },
            "Github"
        )
    );
}

function AndThisIs() {
    return React.createElement(
        "p",
        { className: "card-body" },
        "my linux setup script \uD83D\uDC7B ",
        React.createElement(
            "a",
            { href: "./init.html" },
            " view "
        ),
        " !"
    );
}

function MyOnoSecond() {
    return React.createElement(
        "p",
        { className: "card-body" },
        React.createElement(
            "code",
            null,
            "Flase ",
            React.createElement("br", null),
            "#include <studio.h>"
        )
    );
}

function FavPerson() {
    return React.createElement(
        "p",
        { className: "card-body" },
        React.createElement(
            "a",
            { href: "https://www.tomscott.com/" },
            "Tom Scott"
        )
    );
}

function CardHead(props) {
    return React.createElement(
        "p",
        { className: "card-head" },
        " ",
        props.text,
        " "
    );
}

function CardBody(props) {
    switch (props.flag) {
        case 'whoami':
            {
                return React.createElement(Whoami, null);
                break;
            }
        case 'currentlyworkingon':
            {
                return React.createElement(CurrentlyWorkingOn, null);
                break;
            }
        case 'andthisis':
            {
                return React.createElement(AndThisIs, null);
                break;
            }
        case 'myonosecond':
            {
                return React.createElement(MyOnoSecond, null);
                break;
            }
        case 'favperson':
            {
                return React.createElement(FavPerson, null);
                break;
            }
        default:
            {
                return React.createElement(
                    "p",
                    null,
                    " ",
                    props.text,
                    " "
                );
            }
    }
}

function Card(props) {
    return React.createElement(
        "div",
        { className: "container", id: props.cardId },
        React.createElement(CardHead, { text: props.headtext }),
        React.createElement(CardBody, { flag: props.flag })
    );
}

function CardStack() {
    return React.createElement(
        "div",
        null,
        React.createElement(Card, { headtext: text.head1, flag: "whoami" }),
        React.createElement(Card, { headtext: text.head2, flag: "currentlyworkingon" }),
        React.createElement(Card, { headtext: text.head3, flag: "andthisis" }),
        React.createElement(Card, { headtext: text.head4, flag: "myonosecond" }),
        React.createElement(Card, { headtext: text.head5, flag: "favperson" })
    );
}

function ButtomCol(props) {
    return React.createElement(
        "div",
        { className: "col" },
        React.createElement(
            "p",
            { id: props.id },
            props.text
        )
    );
}

function Bottom() {
    return React.createElement(
        "div",
        { className: "row text-center", style: { backgroundColor: "#F5F5F5", fontFamily: 'JetbrainMono', fontSize: 'small' } },
        React.createElement(ButtomCol, { text: " \uD83C\uDF1D React && Babel " }),
        React.createElement(ButtomCol, { text: "Hosted on Firebase \uD83C\uDF1A" })
    );
}

var ClockWithNavBrand = function (_React$Component) {
    _inherits(ClockWithNavBrand, _React$Component);

    function ClockWithNavBrand(props) {
        _classCallCheck(this, ClockWithNavBrand);

        var _this = _possibleConstructorReturn(this, (ClockWithNavBrand.__proto__ || Object.getPrototypeOf(ClockWithNavBrand)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(ClockWithNavBrand, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                _this2.tick(), 1000;
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: "tick",
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                text.nav,
                " ",
                this.state.date.toLocaleTimeString()
            );
        }
    }]);

    return ClockWithNavBrand;
}(React.Component);

function App() {
    return React.createElement(
        "div",
        { style: { backgroundColor: '#F5F5F5' } },
        React.createElement(Navbar, { navclass: "navbar navbar-expand-lg navbar-light sticky-top" }),
        React.createElement(MeWithBaganCity, { myimgsrc: "./imgs/me3.JPG" }),
        React.createElement(CardStack, null),
        React.createElement(Bottom, null)
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// function tick() {
//     const e = (<p>{text.nav} {new Date().toLocaleTimeString()}</p>);
//     ReactDOM.render(e, document.getElementById('timenav'));
// }
// setInterval(tick, 1000);