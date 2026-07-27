import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-retro-server');
}

export default function Yurots96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-retro-server" />;
}
