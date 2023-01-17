/* eslint-disable @typescript-eslint/no-misused-promises */
import api from '@/utils/api'
import {
  Group,
  Title,
  TextInput,
  Loader,
  Textarea,
  Text,
  useMantineTheme,
  Image,
  Button,
} from '@mantine/core'
import { TbUpload, TbX, TbPhoto } from 'react-icons/tb'
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import InnerImageZoom from 'react-inner-image-zoom'
import {
  showErrorNotification,
  showSuccessNotification,
} from '@/utils/notification'

const EditBook: FC = () => {
  const { state } = useLocation()
  const data = state?.data
  const [title, setTitle] = useState(data != null ? data.title : '')
  const [author, setAuthor] = useState(data != null ? data.author : '')
  const [description, setDescription] = useState(
    data != null ? data.description : ''
  )
  const [publisher, setPublisher] = useState(data != null ? data.publisher : '')
  const [isbn, setIsbn] = useState(data != null ? data.isbn : '')
  const [tags, setTags] = useState(data != null ? data.tags : '')
  const [images, setImages] = useState<FileWithPath[]>([])
  // const [imgBase64, setImgBase64] = useState<null | string | ArrayBuffer>('')
  const [loadingTitle, setLoadingTitle] = useState(false)
  const theme = useMantineTheme()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const checkAvailibility = (): void => {
  //     setLoadingTitle(true)
  //     api
  //       .get('books/getExactBook/' + title)
  //       .then((res) => {
  //         console.log(res)
  //       })
  //       .catch(console.log)
  //       .finally(() => setLoadingTitle(false))
  //   }
  //   // checkAvailibility()
  // }, [title])

  const submit = (): void => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const url = data != null ? `books/${data.id}` : 'books'
    const callApi = data != null ? api.put : api.post
    callApi(url, {
      id: data?.id,
      title,
      author,
      description,
      publisher,
      isbn,
      tags,
      cover: 'imgBase64',
    })
      .then((res) => {
        showSuccessNotification(res)
        navigate(`/admin/books`)
      })
      .catch((err) => {
        showErrorNotification(err)
      })
  }

  const previews = images.map((file, index) => {
    // const reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onload = function () {
    //   console.log(reader.result)
    //   console.log(typeof reader.result)
    //   // setImgBase64(reader.result)
    // }

    const imageUrl = URL.createObjectURL(file)
    return (
      <InnerImageZoom
        key={index}
        // className={classes.image}
        src={imageUrl}
        zoomType="hover"
        hideHint
        zoomPreload={true}
        width={120}
        height={180}
      />
      // <Image
      //   key={index}
      //   width={120}
      //   height={180}
      //   src={imageUrl}
      //   imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      // />
    )
  })

  return (
    <div>
      <Title order={1}>{data != null ? 'Ubah' : 'Tambah'} Buku</Title>
      <TextInput
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        rightSection={loadingTitle ? <Loader size={16} /> : null}
        label="Judul Buku"
        placeholder="Laskar Pelangi"
      />
      <TextInput
        value={author}
        onChange={(event) => setAuthor(event.currentTarget.value)}
        label="Penulis Buku"
        placeholder="Andrea Hirata"
      />
      <Textarea
        value={description}
        autosize
        onChange={(event) => setDescription(event.currentTarget.value)}
        label="Deskripsi Buku"
        placeholder="Deskripsi buku..."
      />
      <TextInput
        value={publisher}
        onChange={(event) => setPublisher(event.currentTarget.value)}
        label="Penerbit Buku"
        placeholder="Gramedia Pustaka Utama"
      />
      <TextInput
        value={isbn}
        onChange={(event) => setIsbn(event.currentTarget.value)}
        label="ISBN Buku"
        placeholder="9873546281"
      />
      <TextInput
        value={tags}
        onChange={(event) => setTags(event.currentTarget.value)}
        label="Kategori Buku (Pisahkan dengan koma)"
        placeholder="informatika, react, javascript"
      />
      <Text style={{ marginTop: 20, marginBottom: 4 }}>Unggah Cover Buku</Text>
      {previews}
      <Dropzone
        onDrop={setImages}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={2 * 1024 ** 2} // 2MB
        multiple={false}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
            <TbUpload
              size={50}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === 'dark' ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <TbX
              size={50}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <TbPhoto size={50} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Button
        style={{ width: '100%', marginTop: 30 }}
        size="lg"
        onClick={submit}
      >
        Simpan
      </Button>
      <div style={{ marginTop: 40 }}></div>
    </div>
  )
}

export default EditBook
