import React from 'react'
import AccountDetailCard from './AccountDetailCard'
import { Input } from '../inputs/TextInput'
import { SocialMediaInput } from '../inputs/SocialMediaInput'
import PaymentAccount from './PaymentAccount'
import PaymentAccountsManagement from './PaymentAccountsManagement'
import UploadImage from './UploadImage'
import { TextArea } from '../inputs/TextArea'
import MusicTag from '../tags/MusicTags'
import AddElementInput from '../inputs/AddElementInput'
import Albums from './musicCatalog/Albums'
import Singles from './musicCatalog/Singles'

const BandDetails = () => {

    const bio = "This is a sample biography. This includes detailed account of a person's life, written by another person. It typically covers the individual's life history achievements, experiences, and significant events."
    const musicGenres = [
        "Clasica",
        "Romántica",
        "Rock",
        "Balada",
        "Bolero",
        "Ranchera",
    ];

    const albums = [
        "Territorio de Esperanza",
        "Cerca y lejos",
        "Los cielos",
    ];

    return (
        <div className="border-gray-200 border-1 rounded-xl w-full">
            <AccountDetailCard
                title={"Información de artista"}
                subtitle={"Actualiza cómo te verán y encontrarán en nuestra plataforma"}
            >

                <div className="w-full">
                    <UploadImage />
                    <div className="mt-5 w-full flex flex-col gap-2">
                        <TextArea label="Biografía" value={bio} onChange={() => console.log("bio")} rows={4} />
                        <div className="flex flex-row w-full justify-stretch gap-2">
                            <Input label="Nombre de la banda" value="Jimbore" />
                            <Input label="Años de experiencia" value="12" />
                        </div>
                    </div>
                </div>

            </AccountDetailCard>

            <AccountDetailCard
                title={"Géneros musicales"}
                subtitle={"Comparte los géneros musicales que compartes y que más trabajas en tus canciones"}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {musicGenres.map(genre => (
                            <MusicTag tagName={genre} />
                        ))}
                    </div>
                    <AddElementInput addItemText={"Añadir Género"} />
                </div>
            </AccountDetailCard>

            <AccountDetailCard
                title={"Carrera musical"}
                subtitle={"Comparte más acerca de tu carrera, canciones, álbumes que puedan tus seguidores escuchar."}
                isBottomCard={true}
            >
                <div className="flex flex-col w-full gap-4">
                    <Albums albums={albums}/>
                    <Singles />
                    <Albums type="ep" albums={albums}/>
                </div>
            </AccountDetailCard>
        </div>
    )
}

export default BandDetails