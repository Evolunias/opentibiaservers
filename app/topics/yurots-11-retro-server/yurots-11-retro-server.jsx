import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-retro-server');
}

export default function Yurots11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-retro-server" />;
}
