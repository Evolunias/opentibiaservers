import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-pvp-server');
}

export default function Xanteria13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-pvp-server" />;
}
