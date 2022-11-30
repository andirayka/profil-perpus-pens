import { FC } from 'react'
import { Spoiler, createStyles, Stack, Text, Tabs } from '@mantine/core'
import { BookListItemProps } from '@/components/BookListItem'

const useStyles = createStyles((t) => ({
  image: {
    width: 240,
    height: 360,
  },
}))

const BookDetailInfo: FC<{ data: BookListItemProps }> = ({ data }) => {
  const { classes } = useStyles()

  return (
    <Stack>
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
            <Text>
              Listrik padam di seluruh Jawa dan Bali secara misterius! Ancaman
              nyata kekuatan baru yang hendak menaklukkan Nusantara.
            </Text>
            <Text>
              Saat yang sama, empat sahabat mendarat di Sumba, hanya untuk
              mendapati nasib ratusan juta manusia ada di tangan mereka! Empat
              mahasiswa ekonomi ini, harus bertarung melawan pasukan berkuda
              yang bisa melontarkan listrik! Semua dipersulit oleh seorang
              buronan tingkat tinggi bertopeng pahlawan yang punya rencana
              mengerikan.
            </Text>
            <Text>
              Saat yang sama, empat sahabat mendarat di Sumba, hanya untuk
              mendapati nasib ratusan juta manusia ada di tangan mereka! Empat
              mahasiswa ekonomi ini, harus bertarung melawan pasukan berkuda
              yang bisa melontarkan listrik! Semua dipersulit oleh seorang
              buronan tingkat tinggi bertopeng pahlawan yang punya rencana
              mengerikan.
            </Text>
            <Text>
              Saat yang sama, empat sahabat mendarat di Sumba, hanya untuk
              mendapati nasib ratusan juta manusia ada di tangan mereka! Empat
              mahasiswa ekonomi ini, harus bertarung melawan pasukan berkuda
              yang bisa melontarkan listrik! Semua dipersulit oleh seorang
              buronan tingkat tinggi bertopeng pahlawan yang punya rencana
              mengerikan.
            </Text>
          </Spoiler>
        </Tabs.Panel>

        <Tabs.Panel value="detail" pt="xs">
          Messages tab content
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
}

export default BookDetailInfo
