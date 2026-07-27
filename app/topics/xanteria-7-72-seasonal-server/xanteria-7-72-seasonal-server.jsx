import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-seasonal-server');
}

export default function Xanteria772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-seasonal-server" />;
}
