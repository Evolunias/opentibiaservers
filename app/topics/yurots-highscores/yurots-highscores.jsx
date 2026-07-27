import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-highscores');
}

export default function YurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="yurots-highscores" />;
}
