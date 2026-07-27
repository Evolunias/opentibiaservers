import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-seasonal-server');
}

export default function Xanteria100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-seasonal-server" />;
}
