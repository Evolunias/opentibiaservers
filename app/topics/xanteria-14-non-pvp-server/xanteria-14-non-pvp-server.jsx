import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-non-pvp-server');
}

export default function Xanteria14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-non-pvp-server" />;
}
