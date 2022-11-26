import { VideoYoutub } from './styled';

function VideoYoutube() {

  return (
    <VideoYoutub>

      <div className="videoYou">
        <h1>Video Youtube</h1>



        <div className="videoYoutube">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/hlcTv1sx9kA"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>

      </div>
    </VideoYoutub>
  );

}

export default VideoYoutube;