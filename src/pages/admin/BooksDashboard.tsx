import React, { useEffect, useState } from 'react'
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

const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },

  // deleteModalDataKey: {
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  // },
}))

interface RowData {
  title: string
  author: string
  publisher: string
  tags: string
  description: string
  isbn: string
  id: string
}

interface ThProps {
  children: React.ReactNode
  reversed?: boolean
  sorted?: boolean
  onSort?: () => void
}

function Th({
  children,
  reversed,
  sorted,
  onSort,
}: ThProps): React.ReactElement {
  const { classes } = useStyles()
  const Icon =
    sorted == null
      ? reversed == null
        ? TbChevronUp
        : TbChevronDown
      : TbSelector
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          {onSort != null && (
            <Center className={classes.icon}>
              <Icon size={14} />
            </Center>
          )}
        </Group>
      </UnstyledButton>
    </th>
  )
}

function filterData(data: RowData[], search: string): RowData[] {
  const query = search.toLowerCase().trim()
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  )
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
): RowData[] {
  const { sortBy } = payload

  if (sortBy == null) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy])
      }

      return a[sortBy].localeCompare(b[sortBy])
    }),
    payload.search
  )
}

const BooksDashboard = (): React.ReactElement => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState<RowData[]>([])
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [deleteModalData, setDeleteModalData] = useState<RowData | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(true)
  const { classes } = useStyles()
  const navigate = useNavigate()

  const deleteBook = (): void => {
    api
      .delete(`books/${deleteModalData?.id ?? ''}`)
      .then((res) => {
        showSuccessNotification(res)
        setOpenDeleteModal(false)
        setIsRefreshing(true)
      })
      .catch((err) => {
        setOpenDeleteModal(false)
        console.log(err)
      })
  }

  useEffect(() => {
    if (isRefreshing) {
      api
        .get('books')
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // const newData = res.data.data.map((item: any) => {
          //   return { ...item, tags: item.tags.join(', ') }
          // })
          setSortedData(res.data.data)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsRefreshing(false)
        })
    }
  }, [isRefreshing])

  const setSorting = (field: keyof RowData): void => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    // setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.currentTarget
    setSearch(value)
    // setSortedData(
    //   sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    // )
  }

  const rows = sortedData.map((row) => (
    <tr key={row.title}>
      <td>{row.title}</td>
      <td>{row.author}</td>
      <td>{row.publisher}</td>
      <td>{row.tags}</td>
      <td style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          style={{ marginRight: 8 }}
          onClick={() => {
            navigate('add')
          }}
        >
          <TbEdit size={20} color="black" />
        </Button>
        <Button
          color="red"
          onClick={() => {
            setDeleteModalData(row)
            setOpenDeleteModal(true)
          }}
        >
          <TbTrash size={20} color="black" />
        </Button>
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Group style={{ justifyContent: 'start', alignItems: 'start' }}>
        <Button
          color="green"
          onClick={() => {
            navigate('add')
          }}
        >
          Tambah
        </Button>
        <TextInput
          placeholder="Cari buku"
          mb="md"
          icon={<TbSearch size={14} />}
          value={search}
          onChange={handleSearchChange}
          style={{ flex: 1 }}
        />
      </Group>
      <Table
        highlightOnHover
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{ tableLayout: 'fixed', minWidth: 700 }}
      >
        <thead>
          <tr>
            <Th
              sorted={sortBy === 'title'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('title')}
            >
              Judul
            </Th>
            <Th
              sorted={sortBy === 'author'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('author')}
            >
              Penulis
            </Th>
            <Th
              sorted={sortBy === 'publisher'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('publisher')}
            >
              Penerbit
            </Th>
            <Th>Tags</Th>
            <Th>Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={4}>
                <Text weight={500} align="center">
                  Tidak ada data
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Apakah Anda yakin untuk menghapus buku?"
        overflow="inside"
        size="50%"
      >
        {deleteModalData != null && (
          <Group
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            spacing="lg"
            p={0}
          >
            <Table horizontalSpacing="md" verticalSpacing="xs">
              <tr>
                <td>Judul</td>
                <td>:</td>
                <td style={{ width: '80%' }}>{deleteModalData.title}</td>
              </tr>
              <tr>
                <td>Penulis</td>
                <td>:</td>
                <td style={{ width: '80%' }}>{deleteModalData.author}</td>
              </tr>
              <tr>
                <td>Penerbit</td>
                <td>:</td>
                <td style={{ width: '80%' }}>{deleteModalData.publisher}</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>:</td>
                <td style={{ width: '80%' }}>{deleteModalData.tags}</td>
              </tr>
              <tr>
                <td>ISBN</td>
                <td>:</td>
                <td style={{ width: '80%' }}>{deleteModalData.isbn}</td>
              </tr>
              {/* <tr>
                <td >Deskripsi</td>
                <td >:</td>
                <td style={{ width: '80%' }}>{deleteModalData.description}</td>
              </tr> */}
            </Table>
            <Button fullWidth color="red" onClick={deleteBook}>
              Hapus Buku
            </Button>
          </Group>
        )}
      </Modal>
    </ScrollArea>
  )
}

export default BooksDashboard
