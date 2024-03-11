import './CostItem.css';

function CostItem(){

  const costDate = new Date(2021, 2, 12);
  const costDescription = 'Холодильник';
  const costAmount = 999.99;
  
  return (
   <div className='cost-item'>
      <div className='cost-item_date'>{costDate.toISOString()}</div>
      <div className='cost-item_description'>
        <h2>{costDescription}</h2>
        <div className='cost-item_price'>$ {costAmount}</div>
      </div>
   </div>
  );
}

export default CostItem;
