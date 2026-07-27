import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-seasonal-server');
}

export default function Xanteria15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-seasonal-server" />;
}
