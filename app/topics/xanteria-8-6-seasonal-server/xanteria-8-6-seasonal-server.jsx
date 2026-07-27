import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-seasonal-server');
}

export default function Xanteria86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-seasonal-server" />;
}
