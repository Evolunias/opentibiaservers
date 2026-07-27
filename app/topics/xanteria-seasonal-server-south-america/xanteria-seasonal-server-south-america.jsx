import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-south-america');
}

export default function XanteriaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-south-america" />;
}
