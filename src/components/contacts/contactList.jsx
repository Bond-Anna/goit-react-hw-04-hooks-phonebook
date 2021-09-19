import PropTypes from 'prop-types';
import css from './contacts.module.css';
export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            <span className={css.marker}></span>
            <span className={css.contactName}>{name}:</span>
            <span className={css.contactNumber}>{number}</span>
          </div>

          <button
            type="button"
            onClick={() => onDeleteBtn(id)}
            className={css.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
