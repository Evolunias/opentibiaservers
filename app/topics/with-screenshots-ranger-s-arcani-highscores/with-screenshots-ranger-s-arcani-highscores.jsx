import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ranger-s-arcani-highscores');
}

export default function WithScreenshotsRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ranger-s-arcani-highscores" />;
}
