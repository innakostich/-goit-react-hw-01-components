
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const colors = ['#EB7474', '#4CB8C4', '#F9D56E', '#A7C080', '#E39D7F'];


export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={css.item} key={id} style={{ background: colors[index] }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};