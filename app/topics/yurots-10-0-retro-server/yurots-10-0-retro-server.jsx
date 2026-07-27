import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-retro-server');
}

export default function Yurots100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-retro-server" />;
}
