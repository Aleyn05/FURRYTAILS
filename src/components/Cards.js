import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';

function Cards() {
    return (
      <div className='cards'>
        <h1>Appointment Types</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardsItem
                src='/services_1.jpg'
                text='Wellness Exams'
                path='/services'
              />