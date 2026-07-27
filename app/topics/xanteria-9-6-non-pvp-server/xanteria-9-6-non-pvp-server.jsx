import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-non-pvp-server');
}

export default function Xanteria96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-non-pvp-server" />;
}
