import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-pvp-server');
}

export default function Xanteria12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-pvp-server" />;
}
