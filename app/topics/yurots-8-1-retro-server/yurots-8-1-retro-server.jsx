import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-retro-server');
}

export default function Yurots81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-retro-server" />;
}
