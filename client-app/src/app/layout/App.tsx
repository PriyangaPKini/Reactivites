import React, { useState, useEffect, Fragment} from "react";
//import { render } from '@testing-library/react';
import axios from "axios";
import { Header, Icon, List, Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashbord } from "../../features/activities/dashbord/ActivityDashbord";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);
  return (
    <Fragment>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashbord activities = {activities}/>
      </Container>
    </Fragment>
  );
};

export default App;