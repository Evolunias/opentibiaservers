import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-retro-server');
}

export default function Xanteria13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-retro-server" />;
}
