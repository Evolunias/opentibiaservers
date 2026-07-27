import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-pvp-server');
}

export default function Xanteria14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-pvp-server" />;
}
