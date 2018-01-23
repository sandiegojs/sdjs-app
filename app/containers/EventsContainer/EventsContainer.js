import React from 'react';
import { connect } from 'react-redux';
import { updateEventsTextInput, updateEventsData } from './eventsActions'
import { Text, View, TextInput, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import data from './eventsData.json'
class EventsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextInput = this.handleTextInput.bind(this);

  }
  componentWillMount(){
    const { dispatch } = this.props
    const eventsData = null;

    //dispatch(updateEventsData(text));

  }

  handleTextInput(text) {
    const { dispatch } = this.props
    dispatch(updateEventsTextInput(text));
  }
  render() {

    const { inputText } = this.props
    return (
      <List>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.handleTextInput}
          value={inputText}
        />
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem
            title={`${item.name} ${item.name}`}
            subtitle={item.name}
          />}
        />
      </List>
    );
  }
};

function mapStoreToProps(store) {
  return {
    inputText: store.eventsData.text,

  };
}


export default connect(mapStoreToProps)(EventsContainer);