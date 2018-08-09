import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

// components
import SearchBar from './searchBar'
import VideoDetail from './videoDetail'
import VideoList from './videoList'

// youtube api key
const API_KEY = 'AIzaSyAOBi0-kbICo8ND8Noit50mEN4uQX9dZcc'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedVideo: null,
      videos: [],
      term: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch (term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      console.log(videos)
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300)
    return <div>
      <SearchBar
        onEnterSearch={videoSearch}
      />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos} />
    </div>
  }
}

export default App
