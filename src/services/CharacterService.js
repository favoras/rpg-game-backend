import axios from "axios";

const CHARACTER_API_BASE_URL = "http://localhost:8080/api/v1/characters";

class CharacterService {

    getCharacters(){
        return axios.get(CHARACTER_API_BASE_URL);
    }

    createCharacter(character){
        return axios.post(CHARACTER_API_BASE_URL, character);
    }

    getCharacterById(characterId){
        return axios.get(CHARACTER_API_BASE_URL + '/' + characterId);
    }

    updateCharacter(character, characterId){
        return axios.put(CHARACTER_API_BASE_URL + '/' + characterId, character);
    }

    deleteCharacter(characterId){
        return axios.delete(CHARACTER_API_BASE_URL + '/' + characterId);
    }

}

export default new CharacterService();