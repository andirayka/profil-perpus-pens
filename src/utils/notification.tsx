import { showNotification } from '@mantine/notifications'
import React from 'react'
import { TbCheck } from 'react-icons/tb'

const showSuccessNotification = (res: any): void => {
  showNotification({
    title: 'Berhasil',
    message: res.data.message,
    color: 'teal',
    icon: <TbCheck size={18} />,
  })
}

export { showSuccessNotification }
