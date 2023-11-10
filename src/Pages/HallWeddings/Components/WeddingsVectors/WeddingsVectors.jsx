import React, { useEffect, useRef, useState } from 'react'
import './weddings-vectors.css'
import weddingVectorImg1 from '../../../../Assets/Hall/weddingVectorImg1.jpg'
import weddingVectorImg2 from '../../../../Assets/Hall/weddingVectorImg2.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const WeddingsVectorData = [
    {
        id: 1,
        title: "Šminka i frizura",
        desc: "Obradujte se profesionalnom šminkom i frizuron za vaš poseban dan",
        image: weddingVectorImg1
    },
    {
        id: 2,
        title: "Nokti",
        desc: "Savršeno negovani nokti za mladenčeve ruke na dan venčanja",
        image: weddingVectorImg2
    },
    {
        id: 3,
        title: "Dekoracija",
        desc: "Dekoracija stolova i mladenačkog stola sa bogatim cvetnim aranžamanom, brojevi ža stolove",
        image: weddingVectorImg1
    },
    {
        id: 4,
        title: "Kutija",
        desc: "Posebna dekorativna kutija za novac",
        image: weddingVectorImg1
    },
]

const WeddingsVectors = () => {

    const [ selectedVector, setSelectedVector ] = useState(null)
    const weddingModalRef = useRef(null)

    const openModal = (vector, e) => {
        setSelectedVector(vector)
    }

    const closeModal = () => {
        setSelectedVector(null)
    }

    useEffect(() => {
        // Add an event listener to close the modal when clicking outside the content box
        const closeOnOutsideClick = (e) => {
            if(selectedVector && weddingModalRef.current && !weddingModalRef.current.contains(e.target)) {
                closeModal()
            }
        };
    
        if (selectedVector) {
          window.addEventListener('click', closeOnOutsideClick);
        }
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('click', closeOnOutsideClick);
        };
      }, [selectedVector]);

  return (
    <div className="weddings-vectors">
        <div className="wv-content">
            <h1>Mladencima poklanjamo:</h1>
            <div className="wv-grid">
            {
                WeddingsVectorData.map((vector, index) => (
                    <div className='wv-column' key={index} onClick={(e) => { openModal(vector) 
                        e.stopPropagation()}}>
                        <h3>{vector.title}</h3>
                    </div>
                ))
            }
            </div>
        </div>
        {
            selectedVector && (
                <div className={`wv-modal`}>
                    <div className="wv-modal-content" ref={weddingModalRef}>
                        <div className="wv-modal-overlay"></div>
                        <button className='wv-modal-close' onClick={() => closeModal()}><AiOutlineCloseCircle /></button>
                        <img src={selectedVector.image} alt="Slika vektora" />
                        <div className="wvm-text">
                            <h1>{selectedVector.title}</h1>
                            <h3>{selectedVector.desc}</h3>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default WeddingsVectors