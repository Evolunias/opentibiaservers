import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-retro-server');
}

export default function Yurots854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-retro-server" />;
}
