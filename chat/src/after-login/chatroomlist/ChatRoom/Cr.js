import React from 'react'
import Cd from './Cd';

const Cr = ({dataList, handleRemove, handleEdit}) => {
  return (
    <tbody>
        {
            dataList.map(item => {
                return(
                    <Cd key = {item.no} item={item} handleRemove={handleRemove}
                    handleEdit={handleEdit}/>
                )
            })
        }
    </tbody>
  );
}

export default Cr;