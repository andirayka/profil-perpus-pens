import { FC } from 'react'
import { createStyles, Header, Container, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
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
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
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
