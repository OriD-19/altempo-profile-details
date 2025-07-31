import React, { useState } from 'react'
import AddElementInput from '../../inputs/AddElementInput'
import Single from './Single'
import { Input } from '../../inputs/TextInput';
import { Modal } from '../../modals/Modal';

const Singles = ({ isModalOpened, setIsModalOpened, albums }) => {

    const [singles, setSingles] = useState([
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
    ]);

    const handleSaveSingle = () => {
        setSingles(prev => [...prev, {
            title: "Ocean Drive",
            album: "Blasé Boys Club",
        }]);
        setIsModalOpened(false);
    }

    return (
        <div>
            <h4 className="text-lg mb-2">Singles</h4>
            <div className="border-1 border-gray-200 rounded-xl mb-2">
                {singles.map((single, index) => {
                    return index === singles.length - 1 ? <Single singleTitle={single.title} albumTitle={single.album} isBottom={true} /> : <Single singleTitle={single.title} albumTitle={single.album} />
                })}
            </div>
            <AddElementInput addItemText={"Añadir Single"} openModal={setIsModalOpened} />

            <Modal
                isOpen={isModalOpened}
                onClose={() => setIsModalOpened(false)}
                onSave={handleSaveSingle}
                title={"Nuevo Single"}
            >

                <div className="flex flex-col gap-2">
                    <Input type="text" label="Nombre del single" value="Ocean Drive" />
                    <Input type="select" label="Álbum" options={albums} />
                </div>

            </Modal>
        </div>
    )
}

export default Singles