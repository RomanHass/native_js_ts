import React, {ChangeEvent, MouseEvent} from 'react';

import { HousesType } from "../02/hw_02";

export const greetengsMessageForStreets = (houses: Array<HousesType>) => {
  const callbackfn = (house: HousesType) => {
    return `Hello ${house.address.street.title}!`;
  };
  return houses.map(callbackfn);
};

// const callback = () => {
//   alert('hello');
// }

// window.setTimeout(callback , 1000)


export const User = () => {

  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
    //alert('user deleted')
  }
  const saveUser = () => {
    alert('user saved')
  }

  const search = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
    // event.currentTarget.value;
  }

  const onNameChanged = () => {
    console.log('name changed');
  }

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed ' + event.currentTarget.value);
  }

  const focuseLostHandler = () => {
    console.log('focus lost handler');
  }
  return (
    <div> 
      <textarea onChange={onNameChanged}
                onBlur={focuseLostHandler}></textarea>

      <input onChange={onAgeChanged} type="number" />
      <button name="search" onClick={search}>search</button>
      
      <button name="delete" onClick={deleteUser}>x</button>
      <button name="save" onClick={deleteUser}>x</button>
    </div>
  );
}