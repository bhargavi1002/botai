import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Stack,} from "@mui/system";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import icon from "../../Assets/newchat.png";
import AddCommentIcon from "@mui/icons-material/AddComment";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const SidePanel = ({setChat,closeMenu}) => {
  const theme = useTheme();
  
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Box>
      {isMobile && (
        <Button
         close ={<CloseIcon />}
         onClick={closeMenu}
         sx={{
          width:1, justifyContent:'flex-end',
          color: theme.palette.text.primary
         }}
         >Close</Button>
      )}

<Link to={'/'} style={{ textDecoration: 'none' }}>
                <Stack
                    onClick={() => {
                        setChat([])
                        closeMenu()
                    }}
                    sx={{
                        bgcolor: 'primary.main',
                        '&:hover ': {
                            bgcolor: 'primary.bg'
                        }
                    }}
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    py={2}
                    px={{xs:2, md:3}}
                >
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box
                            component={'img'}
                            src={icon}
                            height={42}
                            width={42}
                            borderRadius={2}
                            boxShadow={4}
                            flexShrink={0}
                        />
                        <Typography
                            variant={'heading'}
                            fontSize={{xs:16, md:20}}
                            color={'text.primary'}
                        >
                            New Chat
                        </Typography>
                    </Stack>

                    <AddCommentIcon sx={{ color: 'text.primary' }} />

                </Stack>
            </Link>
            <Box p={{ xs: 2, md: 3 }}>
        <Link to={"/PastConversation"} style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            sx={{ width: 1 }}
            onClick={closeMenu}
          >
            Past Conversations
          </Button>
        </Link>
        </Box>
    </Box>
  );
};

export default SidePanel;
