import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response'
import { Link } from 'react-router-dom';
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import ImageIcon from '@material-ui/icons/Image';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    
    // Live api 
     const { data } = useGoogleSearch(term)

    // https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
    // https://cse.google.co.in/cse/create/new
   
    // Mock API call
   // const data = Response
    console.log(data)
    return (
        
        <div className='searchpage'>
            <div className='searchPage__header'>
                
            </div>
            <div className='searchPage__results'>
              <Link to='/'>
                  <img className='searchPage__logo' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Rajendra' /> 
              </Link>
              <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <SubtitlesIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <PlayCircleOutlineIcon />
                                <Link to='/videos'>Videos</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
           <div>
           {true && (
                <div className='searchPage__result'>
                    <p className='searchPage__resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result1'>
                            <a className='searchPage__displayLink' href={item.link}>
                                {(item.pagemap?.cse_image.length>0) && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__result2' src={(item.pagemap?.cse_image.length>0) && item.pagemap?.cse_image[0]?.src} alt='Vijay' />
                                )}
                                {item.displayLink} ◀
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>  
                            <p className='searchPage__resultSnippet'>{item.snippet}</p>
                        </div>
                    ))
                    }
                </div>
            )}
           </div>
        </div>
    )
}

export default SearchPage
