import React, { Fragment, useState, useEffect, useRef } from "react";
import { Button, Columns } from "react-bulma-components";
import styled from "styled-components";
import RecentlyHeardsService from "../../services/recently_heards";
import Music from "./music";

const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`;

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [playRandom, setPlayRadom] = useState(false);
  const AudioRef = useRef();

  useEffect(() => {
    setSongs(
      props.songs.map((song, key) => (
        <Music
          song={song}
          playing={playing.id === song.id}
          setPlaying={setPlaying}
          key={key}
        />
      ))
    );
  }, [props.songs, playing]);

  useEffect(() => {
    if (AudioRef.current !== null) {
      AudioRef.current.pause();
      AudioRef.current.load();
      if (playing.id) {
        AudioRef.current.play();
        RecentlyHeardsService.create(playing.album_id)
      }
    }
  }, [playing]);

  const NextSong = () => {
    if (playRandom) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else {
      setPlaying([]);
    }
  };

  useEffect(() => {
    if (playRandom) NextSong();
  }, [playRandom]);

  const SwitchRandom = () => {
    if (playRandom) {
      setPlayRadom(false);
      setPlaying([]);
    } else {
      setPlayRadom(true);
    }
  };

  return (
    <Fragment>
      <Columns className="is-mobile is-centered">
        <Columns.Column
          desktop={{ size: 5 }}
          mobile={{ size: 12 }}
          className="has-text-centered"
        >
          <PlaySequenceButton
            className="is-medium"
            color="primary" 
            outline
            onClick={() => SwitchRandom()}
          >
            {playRandom ? 'Parar de tocar' : 'Tocar em aleatoriamente'}
          </PlaySequenceButton>
          <audio controls ref={AudioRef} onEnded={() => NextSong()} className='is-hidden'>
            <source src={"http://localhost:3000" + playing.file_url} />
          </audio>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  );
};

export default Musics;
