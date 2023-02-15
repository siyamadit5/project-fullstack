import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardHeader, CardContent, Typography, Stack, Avatar, Grid, Fab, Box, Modal, TextField, Button, CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';

import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    margin: 'auto',
    width: 'auto',
    minWidth: '300px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function SearchAppBar(props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            value={props.value}
            onChange={props.onChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const posts = [
  { title: "New Post", text: "New post content", user: { name: "John Doe" } },
  { title: "Random post", text: "Yes this is a post", user: { name: "Michael Jackson" } },
  { title: "Bitcoin is crashed", text: "Dropped by 99%", user: { name: "NFT" } },
  { title: "Google BART", text: "Google BART is a new way to get to work", user: { name: "Google" } },
  { title: "GPT-3", text: "GPT-3 is a new way to get to work", user: { name: "OpenAI" } },
  { title: "Github", text: "Github is a new way to get to work", user: { name: "Github" } },
  { title: "Facebook", text: "Facebook is a new way to get to work", user: { name: "Facebook" } },
  { title: "Twitter", text: "Twitter is a new way to get to work", user: { name: "Twitter" } },
  { title: "Apple", text: "Apple is a new way to get to work", user: { name: "Apple" } },
]

function Item({ name, text, title }) {
  return (
    <Card sx={{
      minWidth: 200,
    }}>
      <CardHeader avatar={
        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
          {name[0].toUpperCase()}
        </Avatar>
      }
        title={name}
        subheader={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Feed() {
  const [list, setList] = useState(posts);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filteredList = useMemo(() => list.filter((item) => item.text.includes(debouncedSearchTerm)), [debouncedSearchTerm, list]);
  return (<Stack style={{
    width: '100%',
    height: '100%',
  }}>
    <SearchAppBar value={search} onChange={e => setSearch(e.target.value)} />
    <Box position={"relative"} height={'100%'}>
      {filteredList.length > 0 ? <Grid sx={{
        marginTop: 1,
        paddingLeft: 1,
        width: '100%',
        position: 'absolute',
        height: 'calc(100% - 64px)',
        overflowX: 'hidden',
        overflowY: 'auto'
      }} container spacing={2}>
        {filteredList.map((item) => <Grid padding={0} key={item} item xs={12}  sx={{
          padding: 0,
        }}>
          <Item name={item.user.name} text={item.text} title={item.title} />
        </Grid>)}
      </Grid> : (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {(debouncedSearchTerm) ? "No results" : "Empty feed, click below to add items"}
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddPost onClick={async (title, text) => {
          const post = { title, text, user: { name: "Me" } };
          setList([...list, post]);
          handleClose();
        }} />
      </Modal>
      <Fab style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }} color="primary" onClick={handleOpen} aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  </Stack>);
}

function AddPost(props) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  return (<Stack sx={style}>
    <TextField label="title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
    <TextField label="text" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
    <Button onClick={() => props.onClick(title, text)}>Post</Button>
  </Stack>);
}

Feed.propTypes = {};

Feed.defaultProps = {};

export default Feed;
