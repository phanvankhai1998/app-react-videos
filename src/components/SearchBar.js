import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChanged = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFromSubmit = event => {     //callback function
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        //TODO: Make sure we call
        //callback form parent component
    };

    render() {
        return <div className="search-bar ui segment">
            Search Bar
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChanged}
                    //tellMeWhenChanged={ }
                    //onChange={ e => this.setState({ term: e.target.value})}
                    ></input>
                </div>
            </form>
        </div>
    }
}

export default SearchBar;