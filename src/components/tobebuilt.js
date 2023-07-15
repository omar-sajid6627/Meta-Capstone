import './tobebuiltstyles.scss';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;
