import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-retro-server');
}

export default function Yurots772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-retro-server" />;
}
