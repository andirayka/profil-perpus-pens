import { StrukturOrganisasi, Peminjaman } from '@/assets'
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

const Borrowing: FC = () => {
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
      <Title>Profil Perpustakaan</Title>
      <Text style={{ marginTop: 20 }}>
        Politeknik Elektronika Negeri Surabaya (PENS) berdiri 15 Maret 1988
        merupakan pendidikan vokasi yang pada waktu itu masih bernama Politeknik
        Elektronika dan Telekomunikasi (PET) dibawah naungan Fakultas Non Gelar
        Teknik (FNGT) Institut Teknologi Sepuluh Nopember Surabaya. Gedung dan
        fasilitas didalamnya termasuk diantaranya Ruang Perpustakaan yang cukup
        megah lengkap dengan fasilitas pendukungnya yaitu mebeler dan koleksi
        baru yang merupakan hibah dari pemerintah Jepang, melalui Japan
        International Cooperation Agency (JICA)
      </Text>
      <Text style={{ marginTop: 20 }}>
        Pada awal beroperasi Perpustakaan memiliki koleksi sebanyak 450 judul
        buku teknik berbahasa Inggris, ada beberapa koleksi buku ensiklopedia
        dan budaya berbahasa jepang. Pada tahun 1989 – 1991 Perpustakaan
        dipimpin oleh Ir. Elly Purwanti, M.Kom, tahun 1991 – 1994 dipimpimpin
        oleh Elizabeth A. Amalo, Md.L, Ph.D., kemudian pada tahun 1994 – 1997
        dikepalai oleh Drs. Irianto, M.T., tahun 1997 – 2002 dipimpin oleh Dra.
        Endang Merdekawati, selanjutnya pada tahun 2003 – 2004 dipimpin oleh
        Achmad Bilal Hamdani, S.Sos, Lalu pada tahun 2005 – 2010 dipimpin oleh
        Ir. Zainal Muludi, M.T., kemudian pada tahun 2010 – 2012 dipimpin oleh
        Isbat Uzzin Nadhori, S.Kom, M.T., pada tahun 2012 – 2013 dipimpin oleh
        Wiratmoko Yuwono, S.T., M.T., Lalu pada tahun 2013 – 2016 dipimpin oleh
        Akuwan Saleh, S.ST., M.T., mulai tahun 2016 sampai sekarang dipimpin
        oleh Ira Prasetyaningrum, S.Si, M.T.
      </Text>
      <Text style={{ marginTop: 20 }}>
        Pada tahun 2004 perpustakaan menempati gedung baru Sarjana Terapan,
        sebagai perpustakaan ke-2 dengan nama perpustakaan Sarjana Terapan, dan
        perpustakaan yang lama tetap beroperasi dengan nama perpustakaan D3.
        Seiring diresmikannya gedung pascasarja yang baru, disediakan pula ruang
        perpustakaan untuk menunjang kegiatan proses belajar mengajar di lingkup
        mahasiswa pascarjana.
      </Text>
      <Text style={{ marginTop: 20 }}>
        UPT Perpustakaan Politeknik Elektronika Negeri Surabaya, terpilih
        menjadi Unit Pelaksana Teknis (UPT) Terbaik kategori Layanan JOSS yang
        diselenggarakan oleh Unit Penjaminan Mutu (PJM) PENS. Perolehan layanan
        JOSS tersebut membuat UPT perpustakaan PENS menjadi juara bertahan
        selama tiga tahun berturut-turut yaitu pada tahun 2016, 2017 dan tahun
        2018.
      </Text>
      <Title order={2} mt={40} mb={20}>
        Struktur Organisasi
      </Title>
      <InnerImageZoom
        // className={classes.image}
        src={StrukturOrganisasi}
        zoomType="hover"
        zoomPreload={true}
      />
      <Title order={2} mt={40} mb={20}>
        Prosedur Peminjaman Buku
      </Title>
      <InnerImageZoom
        // className={classes.image}
        src={Peminjaman}
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
    </Container>
  )
}

export default Borrowing
