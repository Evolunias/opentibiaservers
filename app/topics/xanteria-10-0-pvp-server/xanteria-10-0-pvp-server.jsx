import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-pvp-server');
}

export default function Xanteria100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-pvp-server" />;
}
