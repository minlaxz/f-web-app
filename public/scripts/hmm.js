var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Navbar() {
    return React.createElement(
        "nav",
        {
            className: "navbar navbar-expand-sm navbar-light sticky-top",
            style: { backgroundColor: '#F5F5F5' } },
        React.createElement(
            "a",
            {
                className: "navbar-brand",
                style: { fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' }
            },
            React.createElement(Clock, null)
        )
    );
}

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
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
                "Welcome - ",
                this.state.date.toLocaleTimeString()
            );
        }
    }]);

    return Clock;
}(React.Component);

// function AndThisIs(){
//     return (
//         <p className='card-body'>
//             my linux setup script 👻 <a href="./init.html" > view </a> !
//         </p>
//     )
// }

function BottomCol(props) {
    return React.createElement(
        "div",
        { className: props.class },
        " ",
        props.text,
        " "
    );
}

function BottomRow() {
    return React.createElement(
        "div",
        { className: "row text-center", style: { backgroundColor: "#F5F5F5", fontFamily: 'JetbrainMono', fontSize: 'small' } },
        React.createElement(BottomCol, { text: " \uD83C\uDF1D React && JSX ", "class": "col-md-6" }),
        React.createElement(BottomCol, { text: "Hosted on Firebase \uD83C\uDF1A", "class": "col-md-6" }),
        React.createElement(BottomCol, { text: "Cloudflare SSL", "class": "col" })
    );
}

var Toggle = function (_React$Component2) {
    _inherits(Toggle, _React$Component2);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this3 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this3.state = {
            hide: false
        };
        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(Toggle, [{
        key: "handleClick",
        value: function handleClick() {
            this.setState(function (prev) {
                return {
                    hide: !prev.hide
                };
            });
            document.getElementById('gists').hidden = this.state.hide;
            document.getElementById('root').hidden = !this.state.hide;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                {
                    onClick: this.handleClick,
                    className: "btn btn-outline-primary btn-sm"
                },
                this.state.hide ? 'Hide Gists!' : 'View My Gists!'
            );
        }
    }]);

    return Toggle;
}(React.Component);

function Acard(props) {
    return React.createElement(
        "div",
        { className: props.class },
        React.createElement(
            "p",
            { className: "card-head" },
            " ",
            props.headtext,
            " "
        ),
        React.createElement(
            "div",
            { className: "card-body" },
            " ",
            props.bodytext,
            " "
        )
    );
}

function PictureBagan(props) {
    return React.createElement(
        "div",
        {
            className: props.class
        },
        React.createElement(
            "p",
            {
                style: { fontSize: '10px', color: '#294659' }
            },
            " React's State and Lifecycle.",
            React.createElement(
                "a",
                {
                    href: "https://reactjs.org/docs/state-and-lifecycle.html"
                },
                "Learn More"
            )
        ),
        React.createElement("img", {
            className: "resize rounded img-thumbnail",
            src: props.src,
            alt: props.alt,
            draggable: false
        }),
        React.createElement(
            "p",
            {
                style: { fontSize: '10px' }
            },
            " @Bagan Myanmar "
        )
    );
}

function UniqueRow() {
    return React.createElement(
        "div",
        { className: "container row" },
        React.createElement(PictureBagan, {
            src: "./imgs/me3.JPG",
            alt: "from Bagan@Myanmar.",
            "class": "col-6 col-md-4 text-center" }),
        React.createElement(Acard, {
            "class": "col-12 col-md-8",
            headtext: "who : ",
            bodytext: ["I am ", React.createElement(
                "b",
                {
                    key: "name",
                    style: { color: 'black', fontWeight: 'bolder' }
                },
                " Min Latt "
            ), React.createElement(
                "a",
                {
                    key: "github",
                    href: "https://githun.com/minlaxz"
                },
                "(minlaxz)"
            ), " from ", React.createElement(
                "a",
                {
                    key: "mmwiki",
                    href: "https://en.wikipedia.org/wiki/Myanmar"
                },
                "Myanmar"
            ), " 🇲🇲 (Burma).", React.createElement(
                "ul",
                { key: "ul_bg" },
                React.createElement(
                    "li",
                    { key: "ttu" },
                    "Background : B.E(EC) ",
                    React.createElement(
                        "a",
                        { href: "http://www.ttu.edu.mm/" },
                        "(@TTU)"
                    ),
                    " "
                ),
                React.createElement(
                    "li",
                    { key: "pgrm" },
                    "Programming : (Javascript, Python, Reactjs, React-native)"
                )
            )]
        })
    );
}

function NextRow(props) {
    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(Acard, {
            "class": "col-md-6 ",
            headtext: props.headtext1,
            bodytext: props.bodytext1
        }),
        React.createElement(Acard, {
            "class": "col-md-6 ",
            headtext: props.headtext2,
            bodytext: props.bodytext2
        })
    );
}

function Root() {
    return React.createElement(
        "div",
        { style: { backgroundColor: '#F5F5F5' } },
        React.createElement(Navbar, null),
        React.createElement(UniqueRow, null),
        React.createElement(NextRow, {
            headtext1: "Currently Working On",
            bodytext1: [React.createElement(
                "a",
                {
                    key: "a",
                    href: "https://github.com/minlaxz/scripts" },
                " dklaxz "
            ), "(Docker)"],
            headtext2: "My Hubs",
            bodytext2: [React.createElement(
                "ul",
                { key: "b" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "github", href: "https://github.com/minlaxz" },
                        " minlaxz@Github "
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "dockerhub", href: "https://hub.docker.com/u/minlaxz" },
                        " minlaxz@Dockerhub "
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "pypihub", href: "https://pypi.org/user/minlaxz/" },
                        " minlaxz@PyPI "
                    )
                )
            )]
        }),
        React.createElement(NextRow, {
            headtext1: "Some Juice.",
            bodytext1: [React.createElement(
                "ul",
                { key: "c" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "laxz-turned-god", href: "https://gd.minlaxz.me" },
                        " laxz-turned-god "
                    ),
                    " \"(Google Drive)\""
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "gh-pages", href: "https://minlaxz.github.io" },
                        " Pages "
                    ),
                    " \"(Github)\""
                )
            )],
            headtext2: "Some Fav Repos",
            bodytext2: [React.createElement(
                "ul",
                { key: "d" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { key: "grepo-1", href: "https://github.com/minlaxz/local-image-share" },
                        " Docker-share "
                    ),
                    " \"(Github)\""
                )
            )]
        }),
        React.createElement(BottomRow, null)
    );
}

ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));