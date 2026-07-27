import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-retro-server');
}

export default function Yurots15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-retro-server" />;
}
