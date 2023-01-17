import { showNotification } from '@mantine/notifications'
import React from 'react'
import { TbAlertCircle, TbCheck } from 'react-icons/tb'

const showSuccessNotification = (res: any): void => {
  showNotification({
    title: 'Berhasil',
    message: res?.data?.message ?? 'Operasi berhasil',
    color: 'teal',
    icon: <TbCheck size={18} />,
  })
}

const showErrorNotification = (res: any): void => {
  showNotification({
    title: 'Gagal',
    message: res?.data?.message ?? 'Terdapat kesalahan',
    color: 'red',
    icon: <TbAlertCircle size={18} />,
  })
}

export { showSuccessNotification, showErrorNotification }
