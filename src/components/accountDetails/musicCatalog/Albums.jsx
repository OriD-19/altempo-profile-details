import React from 'react'
import Album from './Album';
import AddElementInput from '../../inputs/AddElementInput';

const Albums = ({ type, albums }) => {


    if (type === "ep") {
        return (
            <div>
                <h4 className="text-lg mb-2">EPs</h4>
                <div className="border-1 border-gray-200 rounded-xl mb-2">
                    {albums.map((album, index) => (
                        index === albums.length - 1 ? <Album albumTitle={album} isBottom={true} /> : <Album albumTitle={album} />
                    ))}
                </div>
                <AddElementInput addItemText={"Añadir EP"} />
            </div>
        )

    }
    return (
        <div>
            <h4 className="text-lg mb-2">Álbumes</h4>
            <div className="border-1 border-gray-200 rounded-xl mb-2">
                {albums.map((album, index) => (
                    index === albums.length - 1 ? <Album albumTitle={album} isBottom={true} /> : <Album albumTitle={album} />
                ))}
            </div>
            <AddElementInput addItemText={"Añadir álbum"} />

        </div>
    )
}

export default Albums