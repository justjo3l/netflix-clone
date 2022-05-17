import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export default function BrowseMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    console.log(anchorEl)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="md:!hidden">
      <Button
        id="browse-button"
        aria-controls={open ? 'browse-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>
      <Menu
        id="browse-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="browseMenu"
        MenuListProps={{
          'aria-labelledby': 'browse-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>TV Shows</MenuItem>
        <MenuItem onClick={handleClose}>Movies</MenuItem>
        <MenuItem onClick={handleClose}>New & Popular</MenuItem>
        <MenuItem onClick={handleClose}>My List</MenuItem>
      </Menu>
    </div>
  )
}