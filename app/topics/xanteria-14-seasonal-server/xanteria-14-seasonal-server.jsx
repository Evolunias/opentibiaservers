import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-seasonal-server');
}

export default function Xanteria14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-seasonal-server" />;
}
