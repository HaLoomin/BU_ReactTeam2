import React from 'react'
import RemoveEdit from './RemoveEdit.jsx';

const TableData = ({dataList, handleRemove, handleEdit}) => {
  return (
    <tbody>
        {
            dataList.map(item => {
                return(
                    <RemoveEdit key = {item.no} item={item} handleRemove={handleRemove}
                    handleEdit={handleEdit}/>
                )
            })
        }
    </tbody>
  );
}

export default TableData;