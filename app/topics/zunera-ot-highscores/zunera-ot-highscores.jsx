import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-highscores');
}

export default function ZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-highscores" />;
}
