import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-highscores');
}

export default function WithScreenshotsNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-highscores" />;
}
