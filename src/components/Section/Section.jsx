import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
