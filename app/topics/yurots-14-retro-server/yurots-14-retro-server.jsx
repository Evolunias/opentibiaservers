import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-retro-server');
}

export default function Yurots14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-retro-server" />;
}
