import React, { useState } from 'react';
import { Data, Rate, Genre } from '../Data';
import ReactStars from 'react-rating-stars-component';
import Dropdown from './Dropdown';

function CustomFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  let posts = Data.filter((val) => {
    // if search is empty or nothing is selected return the entire array
    if (searchTerm == '' && filter == '' && category == '') {
      return null;

      // if the rating and search is not selected , return whats included with the search term
    } else if (
      filter == '' &&
      searchTerm == '' &&
      val.Category.toLowerCase().includes(category.toLowerCase())
    ) {
      return val;
      // if rating && genre is empty and genre drop down value exists return what matches with the filter
    } else if (
      filter == '' &&
      category == '' &&
      val.Title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
      // if search && rating is empty and genre drop down value exists return what matches with the filter
    } else if (
      searchTerm == '' &&
      filter == '' &&
      val.Category.toLowerCase().includes(category.toLowerCase())
    ) {
      return val;

      // if there neither are empty do logic here
    } else if (
      val.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      val.Rating.toString().toLowerCase().includes(filter.toLowerCase()) &&
      val.Category.toString().toLowerCase().includes(category.toLowerCase())
    ) {
      // return what includes the search term
      return val;
    }
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex' }}>
          <input
            type="search"
            placeholder="Enter Movie Name"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            style={{
              border: '1px solid black',
              width: '100%',
              padding: '10px',
            }}
          />
          <Dropdown
            name="rating"
            id="rating"
            onChange={(event) => {
              setFilter(event.target.value);
            }}
            title={Rate}
          />
          <Dropdown
            name="category"
            id="category"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
            title={Genre}
          />
        </div>
        <div
          style={{
            border: '1px solid black',
            padding: '5px 20px',
            marginTop: '5px',
            width: '47%',
          }}
        >
          {searchTerm || filter || category
            ? posts.map((data) => {
                return (
                  <div key={data.Title}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <h4>{data.Title}</h4>
                      <h5 style={{ color: 'grey' }}>{data.Category}</h5>
                    </div>
                    <div>
                      <ReactStars
                        edit={false}
                        count={10}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                        value={data.Rating}
                      />
                    </div>
                  </div>
                );
              })
            : 'No Match'}
        </div>
      </div>
    </div>
  );
}

export default CustomFilter;
