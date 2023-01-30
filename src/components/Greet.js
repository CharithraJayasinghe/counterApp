import { Component} from 'react';


class Greet extends Component {
    render() {
        return (
            <div>
                <h1>welcome charithra : {this.props.greeting}</h1>
            </div>
        )
    }
    }

    export default Greet;