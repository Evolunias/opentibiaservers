import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-retro-server');
}

export default function Yurots12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-retro-server" />;
}
