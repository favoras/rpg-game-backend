import React, {Component} from 'react';
import ItemService from "../../services/ItemService";

class ListItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        ItemService.getItems().then((res) => {
            this.setState({items: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Item List</h2>
                <div className="row">
                    {/*<button className="btn btn-primary" onClick={this.addCharacter}> Add Character</button>*/}
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Item name</th>
                            <th>Item price</th>
                            <th>Item quantity</th>
                            <th className="text-center">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.items.map(
                                item =>
                                    <tr key = {item.id}>
                                        <td> {item.itemName} </td>
                                        <td> {item.price} </td>
                                        <td> {item.quantity} </td>
                                        <td className= "text-center">
                                            <button className = "btn btn-info"> Add to cart </button>
                                            {/*<button style={{marginLeft: "10px"}} onClick = { () => this.deleteCharacter(item.id) } className = "btn btn-danger">Delete</button>*/}
                                            {/*<button style={{marginLeft: "10px"}} onClick = { () => this.viewCharacter(item.id) } className = "btn btn-success">View</button>*/}
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

export default ListItemComponent;