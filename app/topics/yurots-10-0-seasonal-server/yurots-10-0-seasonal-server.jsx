import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-seasonal-server');
}

export default function Yurots100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-seasonal-server" />;
}
