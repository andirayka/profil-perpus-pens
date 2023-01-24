import { FC, useState } from 'react'
import { createStyles, Navbar, Group, Code, Image, Text } from '@mantine/core'
import {
  TbBellRinging,
  TbSwitchHorizontal,
  TbLogout,
  TbBook,
  TbCalendarTime,
} from 'react-icons/tb'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { LogoPens } from '@/assets'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  }
})

const data = [
  { link: '/admin/dashboard', label: 'Dashboard', icon: TbBellRinging },
  { link: '/admin/books', label: 'Buku', icon: TbBook },
  { link: '/admin/activity', label: 'Jadwal Kegiatan', icon: TbCalendarTime },
]

const SideBar: FC = () => {
  const { classes, cx } = useStyles()
  const navigate = useNavigate()

  const links = data.map((item) => {
    const resolvedPath = useResolvedPath(item.link)
    const active = useMatch({ path: resolvedPath.pathname })

    return (
      <a
        className={cx(classes.link, {
          [classes.linkActive]: active,
        })}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault()
          navigate(item.link)
        }}
      >
        <item.icon className={classes.linkIcon} />
        <span>{item.label}</span>
      </a>
    )
  })

  return (
    <Navbar style={{ height: '100vh' }} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image width={50} src={LogoPens} />
          <Text>Admin PerpusPENS</Text>
          <Code sx={{ fontWeight: 700 }}>1.0</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault()
            navigate('/admin/login')
          }}
        >
          <TbSwitchHorizontal className={classes.linkIcon} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault()
            navigate('/')
          }}
        >
          <TbLogout className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}

export default SideBar
