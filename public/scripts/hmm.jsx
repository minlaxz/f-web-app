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
            <a id='timenav' className="navbar-brand" href="#" style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' }}>
            </a>
        </nav>
    );
}

function MeWithBaganCity(props) {
    return (
        <div className="text-center">
                <p style={{fontSize:'10px', color: '#294659' }}> React only update what it's needed to be.</p>
            <img className="resize rounded img-thumbnail"
                src={props.myimgsrc}
                alt={text.imgalt}/>
                <p style={{ fontSize: '10px' }}> @Bagan </p>
        </div>
    );
}

function Whoami() {
    return (
        <p className="card-body">
            Hi, am <b style={{ color: 'cyan' }}>Min Latt</b> , from Myanmar.🇲🇲
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
            my linux setup script <a href="./init.html" className="btn btn-outline-primary btn-sm">imma 👻</a> !
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
            break;
        }
        case 'currentlyworkingon': {
            return <CurrentlyWorkingOn />
            break;
        }
        case 'andthisis' : {
            return <AndThisIs />
            break;
        }
        case 'myonosecond' : {
            return <MyOnoSecond />
            break;
        }
        case 'favperson' : {
            return <FavPerson />
            break;
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

function App() {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Navbar navclass="navbar navbar-expand-lg navbar-light sticky-top" /> 
            {/* sticky-top vs fixed-top */}
            <MeWithBaganCity myimgsrc="./imgs/me3.JPG" />
            <CardStack />
            <Bottom />
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

function tick() {
    const e = (<p>{text.nav} {new Date().toLocaleTimeString()}</p>);
    ReactDOM.render(e, document.getElementById('timenav'));
}
setInterval(tick, 1000);

// document.addEventListener('DOMContentLoaded', function() {
//     try {
//       let app = firebase.app();
//       let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//       document.getElementById('load').innerHTML = `loaded with ${features.join(', ')}`;
//     } catch (e) {
//       console.error(e);
//       document.getElementById('load').innerHTML = 'Error loading, check the console.';
//     }
//   });