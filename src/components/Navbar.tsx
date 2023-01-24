import { FC, useContext, useState } from 'react'
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Image,
  Autocomplete,
  Center,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { LogoPens } from '@/assets'
import { TbSearch } from 'react-icons/tb'
import { BookContext } from '@/context/BookContext'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'pink',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}))

export interface NavbarLinkProps {
  link: string
  label: string
}
interface NavbarProps {
  links: NavbarLinkProps[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()
  const navigate = useNavigate()
  const { getBooks } = useContext(BookContext)
  const [search, setSearch] = useState('')

  const onPressHome = (): void => {
    navigate('/')
  }

  const items = links.map((link) => {
    const resolvedPath = useResolvedPath(link.link)
    const active = useMatch({ path: resolvedPath.pathname })

    return (
      <Link
        key={link.label}
        to={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active,
        })}
      >
        {link.label}
      </Link>
    )
  })

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Center>
          <Image
            width={50}
            src={LogoPens}
            onClick={onPressHome}
            style={{ cursor: 'pointer' }}
          />
          <Autocomplete
            ml="lg"
            value={search}
            onChange={setSearch}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                void getBooks(search)
              }
            }}
            style={{ width: 400 }}
            placeholder="Cari nama buku atau pengarang"
            icon={<TbSearch size={16} />}
            data={[]}
          />
          {/* <MultiSelect data={data} placeholder="Pilih Kategori" /> */}
        </Center>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  )
}

export default Navbar
