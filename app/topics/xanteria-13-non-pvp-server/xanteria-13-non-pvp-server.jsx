import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-non-pvp-server');
}

export default function Xanteria13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-non-pvp-server" />;
}
