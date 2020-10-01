import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // movies: movies => ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
