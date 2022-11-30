import { JadwalContoh } from '@/assets'
import { Button, Center, Container, createStyles, Text } from '@mantine/core'
import { FC, useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

const useStyles = createStyles((t) => ({}))

const Borrowing: FC = () => {
  const { classes } = useStyles()
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: any): void {
    setNumPages(numPages)
  }

  return (
    <Center>
      <div>
        <Document file={JadwalContoh} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
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
      </div>
    </Center>
  )
}

export default Borrowing
