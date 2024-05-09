import React, { useState } from 'react'
import Modal from './componentts/modal/Modal'
import useFetch from './hooks/useFetch';
import Card from './componentts/card/Card';

function App() {
    const [modal, setModal] = useState(null)
    const { data, loading, error } = useFetch();

    return (
        <div className='app'>
            {
                modal && <Modal setModal={setModal} modal={modal} />
            }
            <div className="main">
                {
                    loading && <h1>Loading...</h1>
                }
                {
                    data.map((post, i) => (
                        <Card key={i} post={post} setModal={setModal}/>
                    ))
                }   
            </div>
        </div>
    )
}

export default App