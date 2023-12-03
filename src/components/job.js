import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td><FormattedMessage id={props.offer.name} /></td>
      <td><FormattedMessage id={props.offer.company} /></td>
      <td>{props.offer.salary.toLocaleString()} <FormattedMessage id="million" /></td>
      <td><FormattedMessage id={props.offer.city} /></td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <th scope="col"><FormattedNumber value={props.offer.views} /></th>
    </tr>
  );
};

export default Job;
