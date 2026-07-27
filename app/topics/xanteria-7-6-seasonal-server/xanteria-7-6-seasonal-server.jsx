import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-seasonal-server');
}

export default function Xanteria76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-seasonal-server" />;
}
