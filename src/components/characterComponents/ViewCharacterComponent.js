import React, {Component} from 'react';
import CharacterService from "../../services/CharacterService";

class ViewCharacterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            character: {}
        }
    }

    componentDidMount() {
        CharacterService.getCharacterById(this.state.id).then( (res) => {
            this.setState({character: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Character details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Character Nickname: </label>
                            <div> {this.state.character.nickname} </div>
                        </div>
                        <div className="row">
                            <label>Gold Amount: </label>
                            <div> {this.state.character.gold} </div>
                        </div>
                        <div className="row">
                            <label>Character Level: </label>
                            <div> {this.state.character.level} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCharacterComponent;