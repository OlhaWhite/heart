import { Component } from "react";
import emptyheart from './heart1-211215-195145.jpg';
import fullheart from './heart2-211215-195145.jpg';

export class Heart extends Component {

    state = {
        CTA: "Like Us!",
        image: emptyheart
    }
    heartClicked = () => {
        this.setState({
            CTA:"Thank you! We love you too!", 
            image: fullheart
        })
    }
    render() {
        return <div>
            <div className="container">
<h1>{this.state.CTA}</h1>
</div>
<div className="container">
<img onClick={this.heartClicked} src = {this.state.image} width="120px" alt="heart"/>
</div>

        </div>
    }
}