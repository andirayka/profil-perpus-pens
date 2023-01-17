import { FC } from 'react'
import { Spoiler, Stack, Text, Tabs } from '@mantine/core'
import { BookListItemProps } from '@/components/BookListItem'

const BookDetailInfo: FC<{ data: BookListItemProps }> = ({ data }) => {
  return (
    <Stack style={{ maxWidth: 500 }} ml="lg">
      <Stack>
        <Text>{data.author}</Text>
        <Text>{data.title}</Text>
      </Stack>

      <Tabs defaultValue="description" pt="xs">
        <Tabs.List defaultValue="description">
          <Tabs.Tab value="description">Deskripsi</Tabs.Tab>
          <Tabs.Tab value="detail">Detail</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="description" pt="xs">
          <Spoiler
            maxHeight={120}
            showLabel="Baca Selengkapnya"
            hideLabel="Tutup"
          >
            <Text>{data?.description}</Text>
          </Spoiler>
        </Tabs.Panel>

        <Tabs.Panel value="detail" pt="xs">
          <Text>Kategori: {data?.tags}</Text>
          <Text>ISBN: {data?.isbn}</Text>
          <Text>Penerbit: {data?.publisher}</Text>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
}

export default BookDetailInfo
