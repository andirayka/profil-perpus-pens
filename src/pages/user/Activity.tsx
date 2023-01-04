import { Kalender } from '@/assets'
import {
  Button,
  Center,
  Container,
  createStyles,
  Text,
  Title,
} from '@mantine/core'
import { FC, useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'

const useStyles = createStyles((t) => ({}))

const Activity: FC = () => {
  const { classes } = useStyles()
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: any): void {
    setNumPages(numPages)
  }

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title>Jadwal Kalender Perpustakaan</Title>
      <Center>
        <InnerImageZoom
          // className={classes.image}
          src={Kalender}
          zoomType="hover"
          zoomPreload={true}
        />
        {/* <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>
            Halaman {pageNumber} dari {numPages}
          </Text>
          <Container
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              fullWidth
              mt="xl"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Sebelumnya
            </Button>
            <div style={{ width: 20 }} />
            <Button
              fullWidth
              mt="xl"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Selanjutnya
            </Button>
          </Container>
        </Container> */}
      </Center>
    </Container>
  )
}

export default Activity
