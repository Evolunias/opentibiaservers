import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-retro-server');
}

export default function Xanteria15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-retro-server" />;
}
