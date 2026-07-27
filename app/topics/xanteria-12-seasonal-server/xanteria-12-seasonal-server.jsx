import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-seasonal-server');
}

export default function Xanteria12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-seasonal-server" />;
}
