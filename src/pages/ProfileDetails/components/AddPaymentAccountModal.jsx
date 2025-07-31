import React from 'react'
import { Input } from '../../../components/inputs/TextInput'

const AddPaymentAccountModal = () => {
  return (

    <div className="flex flex-col w-full">

      <div className="flex flex-col gap-2">

        <Input type="select" label="Selecciona un método de pago" options={["Cuenta de Banco", "Cuenta de PayPal"]} />
        <Input type="text" label="Nombre de banco" value={"Banco Agrícola"} />
        <Input type="select" label="Tipo de cuenta" options={["Cuenta de ahorro", "Cuenta corriente"]} />
        <Input type="select" label="Usuario" options={["Natural", "Jurídico"]} />
        <Input type="text" label="Número de cuenta" value="0009210381230" />
        <Input type="text" label="Nombre del propietario" />
        <Input type="text" label="Apellido del propietario" />
      </div>

    </div>

  )
}

export default AddPaymentAccountModal