import './GalerieNature.css'
import { useState } from 'react'
import previousImg from '../../assets/previous.svg'
import nextImg from '../../assets/next.svg'
import random1Img from '../../assets/random1.svg'
import random2Img from '../../assets/random2.svg'


function GalerieNature({ imagini, titlu }) {
  const [valoare, setValoare] = useState(0)
  const [lista, setLista] = useState(imagini)

  const imagine = lista[valoare]
  const totalImagini = lista.length

  const anterioara = () => {
    if (valoare > 0) {
      setValoare(valoare - 1)
    } else {
      setValoare(totalImagini - 1)
    }
  }

  const urmatoare = () => {
    if (valoare < totalImagini - 1) {
      setValoare(valoare + 1)
    } else {
      setValoare(0)
    }
  }

const random = () => {
    const valoareAleatorie = Math.floor(Math.random() * totalImagini)
    setValoare(valoareAleatorie)
  }

const amestecaLista = () => {
    const imagineaCur = lista[valoare]
    const listaNoua = [...lista].sort(() => Math.random() - 0.5)
    const imagineaRandom = listaNoua.indexOf(imagineaCur)
    setLista(listaNoua)
    setValoare(imagineaRandom)
  }

  return (
    <div className="galerie">
      <h1>{titlu}</h1>

      <div className="pozaMare">
        <img src={imagine.url} alt={imagine.title} />
      </div>

      <div className="btn">
        <button className="btnNav" onClick={anterioara}>
          <img src={previousImg} alt="anterioara" />
        </button>
        <button className="btnNav" onClick={random}>
          <img src={random1Img} alt="random" />
        </button>
        <button className="btnNav" onClick={amestecaLista}>
          <img src={random2Img} alt="amesteca" />
        </button>
        <button className="btnNav" onClick={urmatoare}>
          <img src={nextImg} alt="urmatoarea" />
        </button>
      </div>

      <div className="imaginiMiciContainer">
        {lista.map((imag, i) => (
          <img
            key={imag.id}
            alt={imag.title}
            src={imag.url}
            className={`imagineMica ${i === valoare ? 'activa' : ''}`}
            onClick={() => setValoare(i)}
          />
        ))}
      </div>
    </div>
  )
}
export default GalerieNature