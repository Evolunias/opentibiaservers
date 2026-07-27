import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-pvp-server');
}

export default function Xanteria854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-pvp-server" />;
}
