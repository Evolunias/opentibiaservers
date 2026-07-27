import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-seasonal-server');
}

export default function Yurots11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-seasonal-server" />;
}
