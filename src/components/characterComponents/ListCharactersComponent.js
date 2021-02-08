import React, {Component} from 'react';
import CharacterService from "../../services/CharacterService";

class ListCharactersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }
        this.addCharacter = this.addCharacter.bind(this);
        this.editCharacter = this.editCharacter.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);
        this.viewCharacter = this.viewCharacter.bind(this);
    }
    componentDidMount(){
        CharacterService.getCharacters().then((res) => {
            this.setState({characters: res.data})
        });
    }

    addCharacter(){
        this.props.history.push('/addCharacter/-1');
    }

    editCharacter(id) {
        this.props.history.push(`/addCharacter/${id}`);
    }

    deleteCharacter(id){
        CharacterService.deleteCharacter(id).then( (res) => {
            this.setState({characters: this.state.characters.filter(character => character.id !== id)});
        });
    }

    viewCharacter(id){
        this.props.history.push(`/viewCharacter/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Characters List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCharacter} style={{marginBottom: "10px"}}> Add Character</button>
                </div>
                <div className="row">
                    <table className="table table-bordered table-primary">
                        <thead>
                            <tr>
                                <th>Nickname</th>
                                <th>Level</th>
                                <th>Gold</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.characters.map(
                                character =>
                                    <tr key = {character.id}>
                                        <td> {character.nickname} </td>
                                        <td> {character.level} </td>
                                        <td> {character.gold} </td>
                                        <td className= "text-center">
                                            <button onClick = { () => this.editCharacter(character.id) } className = "btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.deleteCharacter(character.id) } className = "btn btn-info">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.viewCharacter(character.id) } className = "btn btn-info">View</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCharactersComponent;