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
        React.createElement("a", { id: "timenav", className: "navbar-brand", href: "#", style: { fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' } })
    );
}

function MeWithBaganCity(props) {
    return React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
            "p",
            { style: { fontSize: '10px', color: '#294659' } },
            " React only update what it's needed to be."
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
        "my linux setup script ",
        React.createElement(
            "a",
            { href: "./init.html", className: "btn btn-outline-primary btn-sm" },
            "imma \uD83D\uDC7B"
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

function tick() {
    var e = React.createElement(
        "p",
        null,
        text.nav,
        " ",
        new Date().toLocaleTimeString()
    );
    ReactDOM.render(e, document.getElementById('timenav'));
}
setInterval(tick, 1000);