
export interface PoeticaSection {
  title: string;
  content: string;
  icon?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}
