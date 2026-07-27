import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-seasonal-server');
}

export default function Xanteria13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-seasonal-server" />;
}
