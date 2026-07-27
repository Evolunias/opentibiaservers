import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-pvp-server');
}

export default function Xanteria11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-pvp-server" />;
}
