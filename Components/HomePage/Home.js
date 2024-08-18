import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { templateImagesPaths } from '../Data/Data';
import { useDispatch } from 'react-redux';
import { updateState } from '../../ReduxManager/dataStoreSlice';
import shortid from 'shortid';
import './Home.css';

function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver');
    const dispatch = useDispatch();

    return (
        <div style={{ minWidth: '300px' }}>
            <div className='d-flex justify-content-center mt-5'>
                <h3 className='p-2 rounded'>Select a Template to get started!</h3>
            </div>
            <br></br>
            <br></br>

            <div className='container'>
                <div className='template-slider'>
                    {templateImagesPaths.map((currentTemplate) => (
                        <div className='template-item' key={shortid.generate()}>
                            <div
                                className='image-container'
                                onMouseOver={() => setIsMouseOver(currentTemplate.name)}
                                onMouseOut={() => setIsMouseOver('MouseIsNotOver')}
                            >
                                <div className='w-100 d-flex justify-content-center'>
                                    <h3>{currentTemplate.name}</h3>
                                </div>
                                <img className='w-100 image-aspect-ratio' src={currentTemplate.imageSource} alt='template' />
                                {isMouseOver === currentTemplate.name && (
                                    <Link to="/detailsfillingpage/personalinfo">
                                        <button
                                            className='use-template-button'
                                            onClick={() => dispatch(updateState({
                                                key: 'selectedTemplate',
                                                value: currentTemplate.name
                                            }))}
                                        >
                                            Use Template
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
