import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-pvp-server');
}

export default function Xanteria15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-pvp-server" />;
}
