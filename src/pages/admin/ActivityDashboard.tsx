import React, { FC, useEffect, useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  Button,
  Modal,
  Title,
} from '@mantine/core'
import { keys } from '@mantine/utils'
import {
  TbSelector,
  TbChevronDown,
  TbChevronUp,
  TbSearch,
  TbEdit,
  TbTrash,
} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import api from '@/utils/api'
import { showSuccessNotification } from '@/utils/notification'

const useStyles = createStyles((theme) => ({}))

const ActivityDashboard: FC = () => {
  return (
    <ScrollArea>
      <Title order={1}>Jadwal Kegiatan Perpustakaan</Title>
    </ScrollArea>
  )
}

export default ActivityDashboard
