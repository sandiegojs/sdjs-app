import React from 'react';
import { connect } from 'react-redux';
import { updateEventsData } from './eventsActions';
import { FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { getDayOfTheWeek , getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from './eventsDateAndTime';
class EventsContainer extends React.Component {
  constructor(props) {
    super(props);


  }
  componentWillMount(){
    const { dispatch } = this.props
    const eventsData = null;

    dispatch(updateEventsData(eventsData));

  }

  render() {
    const { navigate } = this.props.navigation;
    const { eventsData } = this.props
    return (
      <List>
        <FlatList
          data={eventsData}
          renderItem={({ item }) => <ListItem
          key={item.id}
            title={`${getDayOfTheWeek(item.local_date)}, ${getMonthString(item.local_date)} ${getDateString(item.local_date)}, ${getYearString(item.local_date)}, ${standardTime(item.local_time)}`}
            subtitle={item.name}
            onPress={() =>
            navigate('EventDetails')
          }
          />}
        />
      </List>
    );
  }
};

function mapStoreToProps(store) {
  return {
    eventsData: store.eventsData.eventsData,

  };
}


export default connect(mapStoreToProps)(EventsContainer);