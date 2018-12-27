import React, { Component } from "react";
import { BackHandler, ScrollView, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import PopularMoviesActions from "../Store/Ducks/PopularMoviesDuck";
import UpcomingMoviesActions from "../Store/Ducks/UpcomingMoviesDuck";
import TopRatedMoviesActions from "../Store/Ducks/TopRatedMoviesDuck";
import LatestMovieActions from "../Store/Ducks/LatestMovieDuck";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularPage: 1,
      upcomingPage: 1,
      topRatedPage: 1
    };
  }

  static navigationOptions = () => ({
    header: null
  });

  componentWillMount() {
    this.props.getPopularMovies(this.state.popularPage);
    this.props.getUpcomingMovies(this.state.upcomingPage);
    this.props.getTopRatedMovies(this.state.topRatedPage);
    this.props.getLatestMovie();
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => true;

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("DetailsScreen", { id: item.id })
      }
    >
      {item.poster_path ? (
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
          }}
        />
      ) : (
        <BlankPoster>
          <Text>{item.title}</Text>
        </BlankPoster>
      )}
    </TouchableOpacity>
  );

  render() {
    return (
      <ScrollView>
        <Title>Último lançamento (Destaque)</Title>
        <Spotlight>
          {this.renderItem({ item: this.props.latestMovie })}
        </Spotlight>

        <Title>Mais populares</Title>
        <MoviesList
          data={this.props.popularMovies}
          horizontal
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

        <Title>Mais recentes</Title>
        <MoviesList
          data={this.props.upcomingMovies}
          horizontal
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

        <Title>Mais bem avaliados</Title>
        <MoviesList
          data={this.props.topRatedMovies}
          horizontal
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

const MoviesList = styled.FlatList`
  height: ${props => props.theme.deviceHeight * 0.3};
  margin-bottom: 10px;
`;

const Spotlight = styled.View`
  height: ${props => props.theme.deviceHeight * 0.3};
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fonts.fontSizeBase * 1.2};
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 10px;
`;

const Poster = styled.Image`
  width: ${props => props.theme.deviceHeight * 0.2};
  height: ${props => props.theme.deviceHeight * 0.3};
  margin-right: 10px;
`;

const BlankPoster = styled.View`
  width: ${props => props.theme.deviceHeight * 0.2};
  height: ${props => props.theme.deviceHeight * 0.3};
  margin-right: 10px;
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => ({
  popularMovies: state.popular.movies,
  upcomingMovies: state.upcoming.movies,
  topRatedMovies: state.topRated.movies,
  latestMovie: state.latest.movie
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => {
    dispatch(PopularMoviesActions.popularMoviesRequest(page));
  },
  getUpcomingMovies: page => {
    dispatch(UpcomingMoviesActions.upcomingMoviesRequest(page));
  },
  getTopRatedMovies: page => {
    dispatch(TopRatedMoviesActions.topRatedMoviesRequest(page));
  },
  getLatestMovie: () => {
    dispatch(LatestMovieActions.latestMovieRequest());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
