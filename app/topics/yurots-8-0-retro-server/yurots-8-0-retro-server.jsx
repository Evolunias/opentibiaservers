import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-retro-server');
}

export default function Yurots80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-retro-server" />;
}
