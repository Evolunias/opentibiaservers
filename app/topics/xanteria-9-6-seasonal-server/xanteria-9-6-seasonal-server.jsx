import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-seasonal-server');
}

export default function Xanteria96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-seasonal-server" />;
}
