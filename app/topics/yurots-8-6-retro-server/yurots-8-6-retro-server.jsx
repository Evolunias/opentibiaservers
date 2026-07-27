import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-retro-server');
}

export default function Yurots86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-retro-server" />;
}
