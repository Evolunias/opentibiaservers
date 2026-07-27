import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-retro-server');
}

export default function Xanteria12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-retro-server" />;
}
