import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { logout } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("clicked")
    setAnchorEl(event.currentTarget)
    console.log(anchorEl)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
        <Button
            id="account-button"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="!capitalize !text-white"
        >
            <img
                  src="https://rb.gy/g1pwyx"
                  alt=""
                  className="cursor-pointer rounded"
                />
        </Button>
        <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="accountMenu"
            MenuListProps={{
            'aria-labelledby': 'account-button',
            }}
        >
        <MenuItem onClick={handleClose}><Link href="/account">Account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Help Center</MenuItem>
        <MenuItem onClick={logout}>Sign out of Netflix</MenuItem>
      </Menu>
    </div>
  )
}