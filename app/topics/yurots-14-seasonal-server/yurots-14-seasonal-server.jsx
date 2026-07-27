import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-seasonal-server');
}

export default function Yurots14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-seasonal-server" />;
}
