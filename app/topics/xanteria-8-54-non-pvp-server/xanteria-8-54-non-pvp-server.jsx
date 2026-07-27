import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-non-pvp-server');
}

export default function Xanteria854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-non-pvp-server" />;
}
