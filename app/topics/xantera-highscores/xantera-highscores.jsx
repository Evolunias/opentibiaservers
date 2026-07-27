import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-highscores');
}

export default function XanteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="xantera-highscores" />;
}
