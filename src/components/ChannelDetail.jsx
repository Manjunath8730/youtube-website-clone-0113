
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
    const [channelDetail, setchannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams();

    // console.log(channelDetail, videos)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setchannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    // background: '#ce03b8',
                    // background: 'rgba(206,3,184,100)',
                    // backgroundImage: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0 %, rgba(206, 3, 184, 1) 100 %, rgba(0, 212, 255, 1) 100 %)',
                    backgroundImage: 'linear-gradient(to right, rgba(170,0,0,0), rgba(255,0,0,1))',
                    // background: 'rgb(193,248,230)',
                    zIndex: 10,
                    height: '300px'
                }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>

        </Box>


    )
}

export default ChannelDetail