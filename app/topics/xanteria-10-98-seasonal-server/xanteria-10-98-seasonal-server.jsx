import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-seasonal-server');
}

export default function Xanteria1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-seasonal-server" />;
}
