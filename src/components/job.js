import React from "react";
import { FormattedDate, FormattedMessage } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td><FormattedMessage id="Position" /></td>
      <td><FormattedMessage id="Company" /></td>
      <td>{props.offer.salary.toLocaleString()} <FormattedMessage id="million" /></td>
      <td><FormattedMessage id="City" values={{ city: props.offer.city }} /></td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <th scope="col"><FormattedMessage id="Views" /></th>
    </tr>
  );
};

export default Job;
