import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-highscores');
}

export default function WithScreenshotsTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-highscores" />;
}
