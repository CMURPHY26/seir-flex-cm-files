
class Reviews extends React.Component {
    render() {
        return (
            <div>
                <h3>Reviews</h3>
                <p>1,281</p>
            </div>
        )
    }
}

class AverageRating extends React.Component {
    render() {
        return (
            <div>
                <h3>Average Rating</h3>
                <p>4.6</p>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render() {
        return (
            <div>
                <h3>Sentiment Analysis</h3>
                <div className="sentimentNum">
                <p>960</p>
                <p>122</p>
                <p>321</p>
                </div>
            </div>
        )
    }
}


class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
            </div>
        )
    }
}


class WebsiteVisitors extends React.Component {
    render() {
        return (
            <div className="websiteVisitors">
                <h3>Website Visitors</h3>
                <p>821</p>
                <div className="graphContainer">
                <div className="visitorsGraph"></div>
                </div>
            </div>
        )
    }
}

class MainInfo extends React.Component {
    render() {
        return (
            <div className="mainInfo">
                <Cards />
                <WebsiteVisitors />
            </div>
        )
    }
}


class SideBar extends React.Component {
    render() {
        return (
            <div className="sideBar">
                <ul>
                    <li>Dashboard</li>
                    <li>Widget</li>
                    <li>Reviews</li>
                    <li>Customers</li>
                    <li>Online Analysis</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    render () {
        return (
            <div className="app">
                <SideBar />
                <MainInfo />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("main")
)
