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
import { useNavigate } from 'react-router-dom'

const EditBook: FC = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [publisher, setPublisher] = useState('')
  const [isbn, setIsbn] = useState('')
  const [tags, setTags] = useState('')
  const [files, setFiles] = useState<FileWithPath[]>([])
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
    api
      .post('books', {
        title,
        author,
        description,
        publisher,
        isbn,
        tags,
        cover: 'test',
      })
      .then(console.log)
      .catch(console.log)
      .finally(() => {
        navigate(`admin/books`)
      })
  }

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file)
    return (
      <Image
        key={index}
        width={120}
        height={180}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    )
  })

  return (
    <div>
      <Title order={1}>Tambah Buku</Title>
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
        onDrop={setFiles}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        // {...DropzoneProps}
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
