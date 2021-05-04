function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-sm navbar-light sticky-top"
            style={{ backgroundColor: '#F5F5F5' }} >
            <a
                className="navbar-brand"
                style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#445159' }}
            >
                <Clock />
            </a>
        </nav>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => { this.tick(), 1000 }
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <p>
                Welcome - {this.state.date.toLocaleTimeString()}
            </p>
        )
    }
}

// function AndThisIs(){
//     return (
//         <p className='card-body'>
//             my linux setup script 👻 <a href="./init.html" > view </a> !
//         </p>
//     )
// }

function BottomCol(props) {
    return (
        <div className={props.class}> {props.text} </div>
    );
}

function BottomRow() {
    return (
        <div className='row text-center' style={{ backgroundColor: "#F5F5F5", fontFamily: 'JetbrainMono', fontSize: 'small' }}>
            <BottomCol text=' 🌝 React && JSX ' class='col-md-6' />
            <BottomCol text='Hosted on Firebase 🌚' class='col-md-6' />
            <BottomCol text='Cloudflare SSL' class='col' />
        </div>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prev => (
            {
                hide: !prev.hide
            }
        )
        );
        document.getElementById('gists').hidden = this.state.hide
        document.getElementById('root').hidden = !this.state.hide
    }
    render() {
        return (
            <button
                onClick={this.handleClick}
                className='btn btn-outline-primary btn-sm'
            >
                {this.state.hide ? 'Hide Gists!' : 'View My Gists!'}
            </button>
        )
    }
}

function Acard(props) {
    return (
        <div className={props.class}>
            <p className="card-head" > {props.headtext} </p>
            <div className="card-body" > {props.bodytext} </div>
        </div>
    )
}

function PictureBagan(props) {
    return (
        <div
            className={props.class}
        >
            <p
                style={{ fontSize: '10px', color: '#294659' }}
            > React's State and Lifecycle.
                <a
                    href='https://reactjs.org/docs/state-and-lifecycle.html'
                >Learn More</a>
            </p>
            <img
                className="resize rounded img-thumbnail"
                src={props.src}
                alt={props.alt}
                draggable={false}
            />
            <p
                style={{ fontSize: '10px' }}
            > @Bagan Myanmar </p>
        </div>
    );
}

function UniqueRow() {
    return (
        <div className="container row">
            <PictureBagan
                src="./imgs/me3.JPG"
                alt="from Bagan@Myanmar."
                class="col-6 col-md-4 text-center" />
            <Acard
                class="col-12 col-md-8"
                headtext={"who : "}
                bodytext={["I am ",
                    <b
                        key="name"
                        style={{ color: 'black', fontWeight: 'bolder' }}
                    > Min Latt </b>,
                    <a
                        key="github"
                        href="https://githun.com/minlaxz"
                    >(minlaxz)</a>,
                    " from ",
                    <a
                        key="mmwiki"
                        href="https://en.wikipedia.org/wiki/Myanmar"
                    >Myanmar</a>,
                    " 🇲🇲 (Burma).",

                    <ul key="ul_bg">
                        <li key="ttu">Background : B.E(EC) <a href="http://www.ttu.edu.mm/">(@TTU)</a> </li>
                        <li key="pgrm">Programming : (Javascript, Python, Reactjs, React-native)</li>
                    </ul>
                ]}
            />
        </div>
    )
}

function NextRow(props) {
    return (
        <div className="row">
            <Acard
                class="col-md-6 "
                headtext={props.headtext1}
                bodytext={props.bodytext1}
            />
            <Acard
                class="col-md-6 "
                headtext={props.headtext2}
                bodytext={props.bodytext2}
            />
        </div>
    )
}

function Root() {
    const si = require('systeminformation');
    si.cpu()
        .then(data => console.log(data))
        .catch(error => console.error(error));
    console.log("Hey")
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Navbar />
            <UniqueRow />
            <NextRow
                headtext1="Currently Working On"
                bodytext1={[
                    <a
                        key="a"
                        href="https://github.com/minlaxz/scripts"> dklaxz </a>, "(Docker)"
                ]}
                headtext2="My Hubs"
                bodytext2={[
                    <ul key='b'>
                        <li>
                            <a key="github" href="https://github.com/minlaxz"> minlaxz@Github </a>
                        </li>
                        <li>
                            <a key="dockerhub" href="https://hub.docker.com/u/minlaxz"> minlaxz@Dockerhub </a>
                        </li>
                        <li>
                            <a key="pypihub" href="https://pypi.com/minlaxz"> minlaxz@pypi </a>
                        </li>
                    </ul>


                ]}
            />
            <NextRow
                headtext1="Some Juice."
                bodytext1={[
                    <ul key='c'>
                        <li>
                            <a key="laxz-turned-god" href="https://gd.minlaxz.me"> laxz-turned-god </a> "(Google Drive)"
                        </li>
                        <li>
                            <a key="gh-pages" href="https://minlaxz.github.io"> Pages </a> "(Github)"
                        </li>
                    </ul>

                ]}
                headtext2="Some Fav Repos"
                bodytext2={[
                    <ul key='d'>
                        <li>
                            <a key="grepo-1" href="https://github.com/minlaxz/local-image-share"> Docker-share </a> "(Github)"
                        </li>
                    </ul>
                ]}
            />
            <BottomRow />
        </div>
    );
}

ReactDOM.render(
    <Root />, document.getElementById('root')
);

