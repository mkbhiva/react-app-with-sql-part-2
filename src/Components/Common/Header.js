import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row p-3'>
                    <div className='col'>
                        <h4>Menu</h4>
                        
                        <div className="list-group mt-4">
                            <Link to="/" className="list-group-item list-group-item-action">
                                Home
                            </Link>
                            <Link to="/userdata" className="list-group-item list-group-item-action">Data List</Link>
                            <Link to="#" className="list-group-item list-group-item-action">Add</Link>
                            <Link to="#" className="list-group-item list-group-item-action">Delete</Link>
                            <Link to="#" className="list-group-item list-group-item-action">Update</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Header;