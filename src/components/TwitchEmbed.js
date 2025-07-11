import React, { useEffect, useRef } from 'react';

function TwitchEmbed({ channel, width = '100%', height = '480' }) {
  const embedRef = useRef(null);
  const id = `twitch-embed-${channel}`;

  useEffect(() => {
    if (!window.Twitch || !embedRef.current) return;

    // Capture la référence au container dès maintenant
    const container = embedRef.current;

    // vide l’ancien embed
    container.innerHTML = '';

    // crée un nouveau player
    new window.Twitch.Embed(id, {
      width,
      height,
      channel,
      parent: [window.location.hostname],
    });

    // cleanup : utilise toujours la même référence capturée
    return () => {
      container.innerHTML = '';
    };
  }, [channel, width, height, id]);

  return <div id={id} ref={embedRef}></div>;
}

export default TwitchEmbed;