import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-retro-server');
}

export default function Yurots71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-retro-server" />;
}
