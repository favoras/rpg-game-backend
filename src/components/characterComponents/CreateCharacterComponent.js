import React, {Component} from 'react';
import CharacterService from "../../services/CharacterService";

class CreateCharacterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nickname: '',
            gold: '',
            level: ''
        }

        this.changeNicknameHandler = this.changeNicknameHandler.bind(this);
        this.saveOrUpdateCharacter = this.saveOrUpdateCharacter.bind(this);
    }

    componentDidMount() {

        if(this.state.id == -1){
            return
        } else {
            CharacterService.getCharacterById(this.state.id).then( (res) => {
                let character = res.data;
                this.setState({
                    nickname: character.nickname
                });
            });
        }
    }

    saveOrUpdateCharacter = (e) => {
        e.preventDefault();
        let character = {nickname: this.state.nickname, gold: 50, level: 1}; // sukuriam objekta su paduotu nickname bei priduodam default reiksmes
        console.log('character ->' + JSON.stringify(character));

        if(this.state.id == -1){
            CharacterService.createCharacter(character).then(res =>{
                this.props.history.push('/characters');
            });
        } else {
            CharacterService.updateCharacter(character, this.state.id).then( (res) => {
                this.props.history.push('/characters');
            });
        }

    }

    changeNicknameHandler= (event) => {
        this.setState({nickname: event.target.value});
    }

    cancel(){
        this.props.history.push('/characters');
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center">Create Character</h3>
        }else {
            return <h3 className="text-center">Update Character Nickname</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            { this.getTitle() }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nickname: </label>
                                        <input placeholder="Nickname" name="nickname" className="form-control" value={this.state.nickname} onChange={this.changeNicknameHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCharacter}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCharacterComponent;