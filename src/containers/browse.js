import React, { useContext, useEffect, useState } from 'react';
import ProfileContainer from './profile';
import { FirebaseContext } from '../context/firebaseContext';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const signOut = () => {
    firebase.auth().signOut()
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName]);

  return (
    profile.displayName ? (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

        <Header src='joker' dontShowOnSmallView>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src='/images/logo/logo.svg' alt='Netflix' />
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink> {user.displayName} </Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={signOut}>Sign Out</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.Title>Watch Joker Now</Header.Title>
            <Header.SubTitle>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </Header.SubTitle>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </>
    ) : (
      <ProfileContainer user={user} setProfile={setProfile} />
    )
  );
};