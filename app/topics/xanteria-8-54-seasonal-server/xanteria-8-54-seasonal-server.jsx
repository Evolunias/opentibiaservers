import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-seasonal-server');
}

export default function Xanteria854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-seasonal-server" />;
}
