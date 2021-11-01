import React, { useState } from "react";
import AddPlace from "../components/Admin/AddPlace";
import Order from "../components/Admin/Order";
import Overview from "../components/Admin/Overview";
import Places from "../components/Admin/Places";

const AdminPanel = () => {
  const [active, setActive] = useState('Overview');
  return (
    <div className='container-fluid'>
      <div className='row my-3'>
        <div className='col-3'>
          <ul className='list-unstyled'>
            <li className='w-100 mb-2'><input
              onClick={() => setActive('Overview')}
              className={active === 'Overview' ? 'w-100 bg-primary text-white d-block' : 'w-100 d-block'}
              type='button'
              value='Overview' /></li>
            <li className='w-100 mb-2'><input
              onClick={() => setActive('Orders')}
              className={active === 'Orders' ? 'w-100 bg-primary text-white d-block' : 'w-100 d-block'}
              type='button'
              value='Orders' /></li>
            <li className='w-100 mb-2'><input
              onClick={() => setActive('Places')}
              className={active === 'Places' ? 'w-100 bg-primary text-white d-block' : 'w-100 d-block'}
              type='button'
              value='Places' /></li>
            <li className='w-100 mb-2'><input Places
              onClick={() => setActive('Add A Place')} className={active === 'Add A Place' ? 'w-100 bg-primary text-white d-block' : 'w-100 d-block'}
              type='button'
              value='Add A Place' /></li>
          </ul>
        </div>
        <div className='col-9'>
          {
            (active === 'Overview' && <Overview></Overview>) ||
            (active === 'Orders' && <Order></Order>) ||
            (active === 'Places' && <Places></Places>) ||
            (active === 'Add A Place' && <AddPlace></AddPlace>)
          }
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
