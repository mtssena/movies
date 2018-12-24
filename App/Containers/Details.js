import React, { Component, Fragment } from "react";
import { BackHandler, Image, Linking, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";
import MovieDetailsActions from "../Store/Ducks/MovieDetailsDuck";
import Theme from "../Theme";

class Details extends Component {
  static navigationOptions = () => {
    return {
      title: "Detalhes"
    };
  };

  componentWillMount() {
    const id = this.props.navigation.getParam("id");
    this.props.getMovieDetails(id);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => this.props.navigation.goBack();

  render() {
    const { movie } = this.props;
    return (
      <Fragment>
        {movie.poster_path && (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
            style={{
              width: Theme.deviceWidth,
              height: Theme.deviceHeight * 0.3
            }}
          />
        )}
        <StyledScrollView>
          <Title>Nome:</Title>
          <Content>{movie.title}</Content>
          <Title>Gênero(s):</Title>
          <Content>{movie.genres.map(gen => gen.name).join("/")}</Content>
          <Title>Sinopse:</Title>
          <Content>{movie.overview}</Content>
          <Title>Lançado em:</Title>
          <Content>{moment(movie.release_date).format("DD/MM/YYYY")}</Content>
          <Title>Site:</Title>
          <TouchableOpacity onPress={() => Linking.openURL(movie.homepage)}>
            <Content>{movie.homepage}</Content>
          </TouchableOpacity>
        </StyledScrollView>
      </Fragment>
    );
  }
}

const StyledScrollView = styled.ScrollView`
  padding: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fonts.fontSizeBase * 1.1};
  font-weight: bold;
`;

const Content = styled.Text`
  margin-bottom: 10px;
`;

const mapStateToProps = state => ({
  movie: state.details.movie,
  error: state.details.error,
  fetching: state.details.fetching
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => {
    dispatch(MovieDetailsActions.movieDetailsRequest(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
