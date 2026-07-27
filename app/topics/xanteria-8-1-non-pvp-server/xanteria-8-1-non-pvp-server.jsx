import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-non-pvp-server');
}

export default function Xanteria81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-non-pvp-server" />;
}
