import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-sweden');
}

export default function XanteriaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-sweden" />;
}
