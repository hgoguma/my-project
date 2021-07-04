import React, { useState, useCallback, useEffect } from 'react';
import { ProfileHeader, ProfileArea, ProfileContainer, AvatarContainer, ProfileStatus, 
    Contents, GalleryContainer, ImageRow, Image } from './styles';
import { Link, Redirect } from 'react-router-dom';

import { createApi } from 'unsplash-js';

const Profile = () => {

    // type JSONResponse = {
    //     data?: {
    //         pokemon: Omit<PokemonData, 'fetchedAt'>
    //     }
    //     errors?: Array<{message: string}>
    // }

    interface Photo {
        id: string;
        width: number;
        height: number;
        urls: { full: string; regular: string; raw: string; small: string; thumb: string; };
        color: string | null;
        user: {
            username: string;
            name: string;
        };
        alt_description: any;

    };

    const [photosResponse, setPhotosResponse] = useState<Photo[]>([]);

    

    const api = createApi({
        accessKey: ACCESS_KEY,
    });
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.search.getPhotos({ query: "cat", orientation: "landscape" })
            if(result.type === 'success') {
                let results = result.response.results
                setPhotosResponse(results)
            }
        }
        fetchData()
    }, []);

    return (
        <div>
            {/* header */}
            <ProfileHeader>
                헤더헤더
            </ProfileHeader>
            {/* profile area */}
            <ProfileArea>
                <ProfileContainer>
                    <AvatarContainer>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4ODzh_O2Yi6Mq1-1Qdvppx_ba2adZFWsnWr4jixVTT04X0B3Pf-2kv06QnDMzM_3NV0&usqp=CAU" />
                            <span>계정이름</span>
                        </div>
                    </AvatarContainer>
                    <ProfileStatus>
                        게시물 1
                        팔로잉 1
                        팔로워 1
                    </ProfileStatus>
                </ProfileContainer>
                <Contents>
                    자기 소개 자기 소개
                </Contents>
            </ProfileArea>
            
            {/* image card area */}
            <GalleryContainer>
                <ImageRow>
                    {photosResponse.map(item => {
                        return (
                            <Image key={item.id}>
                                <img src={item.urls.small} alt={item.alt_description}/>
                            </Image>
                        )
                    })}
                </ImageRow>
            </GalleryContainer>
        </div>
    );
};

export default Profile;