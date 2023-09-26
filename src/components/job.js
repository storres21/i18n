import React from "react";
import ReactDOM from "react-dom";
import {FormattedDate} from 'react-intl';
import {FormattedMessage} from 'react-intl';
import IntlProvider from "react-intl";

const Job = (props) => {
  const { offer, language, numberFormatOptions } = props;
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {new Intl.NumberFormat(language, numberFormatOptions).format(offer.salary)}{" "}
        {language.startsWith('es') ? (offer.salary === 1 ? "millón" : "millones") : (offer.salary === 1 ? "million" : "millions")}
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{new Intl.NumberFormat('en-US').format(props.offer.visits)}</td>

    </tr>
  );
};

export default Job;
