import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserList() {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyapi.io/data/v1/user",{
          headers:{'app-id':import.meta.env.VITE_APP_ID}
        }).then(response=>{
          const postData=response.data;
          setUser([...postData.data]);
        })
    },[])

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        (user.length > 0) ?  user.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value.firstName}`}
                      src={value.picture}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={ value.firstName +" " + value.lastName} />
                </ListItemButton>
              </ListItem>
            );
          }) : "loading....."
      }
    </List>
  );
}