import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-highscores');
}

export default function ZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-highscores" />;
}
