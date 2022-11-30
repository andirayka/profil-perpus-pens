import { lsKeys } from '@/utils/constants'
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Alert,
} from '@mantine/core'
import { FC, useState } from 'react'
import { TbAlertCircle } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (): void => {
    if (email.length === 0 || password.length === 0) {
      setShowAlert(true)
      return
    }

    navigate('dashboard')
    localStorage.setItem(lsKeys.isLoggedIn, '1')
  }

  return (
    <Container size={420}>
      <Title
        align="center"
        sx={(theme) => ({
          fontWeight: 900,
        })}
      >
        Selamat Datang!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Masuk ke halaman Admin Profil PENS.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Masuk
        </Button>
      </Paper>

      {showAlert && (
        <Alert
          icon={<TbAlertCircle size={16} />}
          title="Gagal"
          color="red"
          withCloseButton
          onClose={() => setShowAlert(false)}
          mt="md"
        >
          Lengkapi form login
        </Alert>
      )}
    </Container>
  )
}

export default Login
