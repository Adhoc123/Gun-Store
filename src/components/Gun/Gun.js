import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    console.log(props.gun)
    const [modalData, setModalData] = useState({});
    const {category,bullet,price,name,action,img} = props.gun;
    return (
        <div>
            <div className="card w-full h-full  bg-base-100 shadow-xl">
                <figure><img className="h-56 w-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <div className="badge badge-outline">{category}</div> 
                    <div className="badge badge-outline">{bullet}</div>
                    <div>
                    <button onClick={()=>props.increase()}className="btn btn-sm btn-danger mr-2">Add To Cart</button>
                    <label onClick={()=>setModalData(props.gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-primary">Details</label>

                    </div>
                    {modalData && <Modal data={modalData} setModalData={setModalData}></Modal>}
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Gun;