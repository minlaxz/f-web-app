const text = {
    nav: "🦄 Super Welcome!",
    imgalt: "I am from Myanmar.",
    head1: "who am i : ",
    head2: "Currently working on 🔭 ?",
    head3 : "And this is 🔥🔥 .., Fire",
    head4 : "My onosecond 🥴",
    head5 : "My fav person",
};

function Navbar(props) {
    return (
        <nav className={props.navclass} style={{backgroundColor:'#F5F5F5'}} >
            <a id='timenav' className="navbar-brand" style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' }}>
            <ClockWithNavBrand />
            </a>
        </nav>
    );
}

function MeWithBaganCity(props) {
    return (
        <div className="text-center">
                <p style={{fontSize:'10px', color: '#294659' }}> 
                    React's State and Lifecycle. <a href='https://reactjs.org/docs/state-and-lifecycle.html'>Learn More</a>
                </p>
            <img className="resize rounded img-thumbnail"
                src={props.myimgsrc}
                alt={text.imgalt}
                draggable={false}
                />
                <p style={{ fontSize: '10px' }}> @Bagan Myanmar </p>
        </div>
    );
}

function Whoami() {
    return (
        <p className="card-body">
            Hi, am <b style={{ color: 'black' }}>Min Latt</b> , from Myanmar.🇲🇲
            Background 📑, B.E. EC <a href="http://www.ttu.edu.mm/">(@TTU)</a>
            Programmings <code>Python 🐍, C 🤔 </code>.
            Also <code>Web 🕸, Bash, Etc..</code>
        </p>
    );
}

function CurrentlyWorkingOn() {
    return (
        <p className='card-body'>
            👌, here's my <a href="https://github.com/minlaxz">Github</a>
        </p>
    );
}

function AndThisIs(){
    return (
        <p className='card-body'>
            my linux setup script 👻 <a href="./init.html" > view </a> !
        </p>
    )
}

function MyOnoSecond(){
    return (
        <p className='card-body'>
            <code>Flase <br></br>
                #include &lt;studio.h&gt;
            </code>
        </p>
    )
}

function FavPerson(){
    return (
        <p className='card-body'>
            <a href="https://www.tomscott.com/">Tom Scott</a>
        </p>
    )
}

function CardHead(props) {
    return (
        <p className="card-head" > {props.text} </p>
    );
}

function CardBody(props) {
    switch (props.flag) {
        case 'whoami': {
            return <Whoami />
        }
        case 'currentlyworkingon': {
            return <CurrentlyWorkingOn />
        }
        case 'andthisis' : {
            return <AndThisIs />
        }
        case 'myonosecond' : {
            return <MyOnoSecond />
        }
        case 'favperson' : {
            return <FavPerson />
        }
        default: {
            return (
                <p> {props.text} </p>
            );
        }
    }
}

function Card(props) {
    return (
        <div className="container" id={props.cardId}>
            <CardHead text={props.headtext} />
            <CardBody flag={props.flag} />
        </div>
    );
}

function CardStack() {
    return (
        <div>
            <Card headtext={text.head1} flag="whoami" />
            <Card headtext={text.head2} flag="currentlyworkingon" />
            <Card headtext={text.head3} flag="andthisis" />
            <Card headtext={text.head4} flag="myonosecond" />
            <Card headtext={text.head5} flag="favperson" />
        </div>
    );
}

function ButtomCol(props){
    return (
        <div className='col'>
            <p id={props.id}>
                {props.text}
            </p>
        </div>
    );
}

function Bottom(){
    return (
        <div className='row text-center' style={{backgroundColor : "#F5F5F5", fontFamily:'JetbrainMono', fontSize:'small'}}>
            <ButtomCol text=' 🌝 React && Babel '/>
            <ButtomCol text='Hosted on Firebase 🌚'/>
        </div>
    );
}

class ClockWithNavBrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount () {
        this.timerID = setInterval(
            () => { this.tick(), 1000}
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {
        return (
            <p>
                {text.nav} {this.state.date.toLocaleTimeString()}
            </p>
        )
    }
}

function App() {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Navbar navclass="navbar navbar-expand-lg navbar-light sticky-top" /> 
            <MeWithBaganCity myimgsrc="./imgs/me3.JPG" />
            <CardStack />
            <Bottom />
        </div>
    );
}


ReactDOM.render(
    <App />, document.getElementById('root')
);

// function Tick(props) {
//     const e = (<p>{}</p>);
//     ReactDOM.render(e, document.getElementById('timenav'));
// }
// setInterval(Tick, 1000);