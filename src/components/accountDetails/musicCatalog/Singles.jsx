import React from 'react'
import AddElementInput from '../../inputs/AddElementInput'
import Single from './Single'

const Singles = () => {

    const singles = [
        {
            title: "Fuerza interior",
            album: "Territorio de Esperanza",
        },
        {
            title: "Playa y Montaña",
            album: "Cerca y Lejos",
        },
        {
            title: "Un atardecer",
            album: "Los cielos"
        }
    ]

    return (
        <div>
            <h4 className="text-lg mb-2">Álbumes</h4>
            <div className="border-1 border-gray-200 rounded-xl mb-2">
                {singles.map((single, index) => {
                    return index === singles.length - 1 ? <Single singleTitle={single.title} albumTitle={single.album} isBottom={true} /> : <Single singleTitle={single.title} albumTitle={single.album} />
                })}
            </div>
            <AddElementInput addItemText={"Añadir álbum"} />

        </div>
    )
}

export default Singles