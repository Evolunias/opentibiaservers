import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-retro-server');
}

export default function Yurots84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-retro-server" />;
}
