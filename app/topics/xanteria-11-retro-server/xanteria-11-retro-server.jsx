import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-retro-server');
}

export default function Xanteria11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-retro-server" />;
}
