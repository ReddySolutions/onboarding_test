import { Suspense } from 'react';

// project imports
import Loader from './Loader';


const Loadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
