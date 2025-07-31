import React from 'react'
import AccountDetailCard from './AccountDetailCard'
import { Input } from '../inputs/TextInput'
import { SocialMediaInput } from '../inputs/SocialMediaInput'
import PaymentAccount from './PaymentAccount'
import PaymentAccountsManagement from './PaymentAccountsManagement'

const AccountDetails = () => {
    return (
        <div className="border-gray-200 border-1 rounded-xl w-full">
            <AccountDetailCard
                title={"Información personal"}
                subtitle={"Actualiza tus datos generales para poder estar actualizado para todos los que deseen contactarte"}
            >
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-4">
                        <Input label="Nombre Completo" value={"Jim Harrison"} />
                        <Input label="Fecha de nacimiento" options={["23 / 04 / 1998"]} type="select" />
                        <Input label="Rol de músico" options={["Ambiente", "Comerciales", "Eventos"]} type="select" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input label="País de residencia" type="select" options={["El Salvador"]} />
                        <Input label="Teléfono (opcional)" value={"+503 8749 2038"} />
                        <Input label="Idiomas que hablas" value={"Español, Inglés"} />
                    </div>
                </div>
            </AccountDetailCard>

            <AccountDetailCard
                title={"Datos de registro"}
                subtitle={"Actualiza los datos con los que ingresarás a tu cuenta"}
            >
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <Input label="Correo electrónico" type="email" value="test@gmail.com" />
                        <Input label="Contraseña" type="password" value="123456" />
                    </div>
                    <div>
                        <p className="font-bold text-violet-500">Deseo actualizar mi contraseña</p>
                    </div>
                </div>
            </AccountDetailCard>

            <AccountDetailCard
                title={"Cuentas asociadas"}
                subtitle={"Puedes actualizar tus redes sociales con las cuales ingresar a tu cuenta"}
            >
                <div className="flex flex-col w-full gap-4">
                    <SocialMediaInput platform="facebook" label="Correo electrónico" value="test@gmail.com" connected={true} onDisconnect={() => console.log("disconnecting")} />
                    <SocialMediaInput platform="twitter" label="Correo electrónico" value="test@gmail.com" connected={true} onDisconnect={() => console.log("disconnecting")} />
                    <SocialMediaInput platform="github" label="Correo electrónico" value="test@gmail.com" connected={true} onDisconnect={() => console.log("disconnecting")} />
                </div>
            </AccountDetailCard>

            <AccountDetailCard
                title={"Datos de pago"}
                subtitle={"Actualiza la información de donde deseas recibir tus pagos y las cuentas a las cuales abonaremos tu ganancia"}
                isBottomCard={true}
            >
                <PaymentAccountsManagement>
                    <PaymentAccount accountName="Cuenta Paypal" accountDetails="paypal.me/jim.h88" isMainAccount={true}/>
                    <PaymentAccount accountName="Cuenta de Banco" accountDetails={"Banco Agrícola ****9812"}/>
                    <PaymentAccount accountName="Cuenta de Banco" accountDetails={"Banco Pro Credit ****0933"} isBottom={true}/>
                </PaymentAccountsManagement>
            </AccountDetailCard>
        </div>
    )
}

export default AccountDetails