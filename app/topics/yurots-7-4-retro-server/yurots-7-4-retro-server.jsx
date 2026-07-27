import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-retro-server');
}

export default function Yurots74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-retro-server" />;
}
