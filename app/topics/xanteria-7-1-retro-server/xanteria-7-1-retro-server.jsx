import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-retro-server');
}

export default function Xanteria71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-retro-server" />;
}
