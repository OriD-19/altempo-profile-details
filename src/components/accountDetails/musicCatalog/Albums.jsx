import React from 'react'
import Album from './Album';
import AddElementInput from '../../inputs/AddElementInput';
import { Modal } from '../../modals/Modal';
import { Input } from '../../inputs/TextInput';

const Albums = ({ type, albums, isAlbumModalOpened, setIsAlbumModalOpened, handleAlbumSave }) => {

    if (type === "ep") {
        return (
            <div>
                <h4 className="text-lg mb-2">EPs</h4>
                <div className="border-1 border-gray-200 rounded-xl mb-2">
                    {albums.map((album, index) => (
                        index === albums.length - 1 ? <Album albumTitle={album} isBottom={true} /> : <Album albumTitle={album} />
                    ))}
                </div>
                <AddElementInput addItemText={"Añadir EP"} openModal={setIsAlbumModalOpened} />
                <Modal
                    isOpen={isAlbumModalOpened}
                    onClose={() => setIsAlbumModalOpened(false)}
                    onSave={handleAlbumSave}
                    title={"Nuevo EP"}
                >

                    <div className="flex flex-col gap-2">
                        <Input label="Nuevo EP" value="Dolido pero no arrepentido" />
                    </div>

                </Modal>
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
            <AddElementInput addItemText={"Añadir álbum"} openModal={setIsAlbumModalOpened} />
            <Modal
                isOpen={isAlbumModalOpened}
                onClose={() => setIsAlbumModalOpened(false)}
                onSave={handleAlbumSave}
                title={"Nuevo álbum"}
            >
                <div className="flex flex-col gap-2">
                    <Input label="Nuevo Álbum" value="Quest for Fire" />
                </div>
            </Modal>

        </div>
    )
}

export default Albums