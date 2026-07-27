import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-highscores');
}

export default function XanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="xanteria-highscores" />;
}
