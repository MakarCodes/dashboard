import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import classes from './Page404.module.scss';

const Page404 = () => {
  const location = useLocation();
  return (
    <div className={classes.Container}>
      <h2 className={classes.Info}>
        Sorry, no match found for <code>{location.pathname}</code>
      </h2>
      <Link to='/' className={classes.Back}>
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
