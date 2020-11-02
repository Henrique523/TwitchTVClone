import React from "react";
import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamAvatar,
  StreamUsername,
  StreamHeader,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>
              guilherme_henrique
            </StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra.UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
