import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const AllGun = ({increase}) => {
    const [guns,setGuns] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data));
    },[])
    return (
        <div>
            <div className='my-4'>
                    <h1 className='text-4xl text-center font-bold mt-4'>Welcome To Guns Store</h1>
                    <p className='mx-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus dignissimos dolorem aliquam dicta, delectus distinctio omnis eius odit quos neque voluptatibus reiciendis ipsa consequatur tempora?</p>    
            </div>
            <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                guns.map(gun=>(<Gun gun={gun} increase={increase}></Gun>))
            }
            </div>
        </div>
    );
};

export default AllGun;