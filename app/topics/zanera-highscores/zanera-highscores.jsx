import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-highscores');
}

export default function ZaneraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="zanera-highscores" />;
}
