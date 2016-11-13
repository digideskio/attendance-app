import { createContainer } from 'meteor/react-meteor-data';
import { insert } from '/imports/collections/mcPeople';
import AddVolunteer from '../components/AddVolunteer';

function handleSubmit ({ pplName, pplSurname }) {
  console.log("handlesSubmit method");
  insert.call({
    // check record attendance insert for example
    pplName,
    pplSurname,
  });
}
const AddVolunteerContainer = createContainer(() => {
  return {
    onSubmit: handleSubmit,
  };
}, AddVolunteer);

export default AddVolunteerContainer;